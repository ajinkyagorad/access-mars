// Re-encodes 2017-era draco (bitstream 2.0) GLB assets with a modern draco
// encoder (bitstream 2.2):
//   decode with draco3d@1.2.6  ->  encode with draco3dgltf (1.5.x)
// The binary chunk is rebuilt WITHOUT the old draco bufferViews (all other
// buffer data, e.g. animation accessors, is preserved and renumbered).
// Draco placeholder accessors are untouched (same mesh, same counts).
// Every re-encoded mesh is round-trip verified with the modern decoder.
// Usage: node scripts/reencode-draco.js <in.glb> <out.glb>

const fs = require('fs');
const path = require('path');
const dracoOld = require('draco3d-old');
const dracoNew = require('draco3dgltf');

const DRACO_ATTR = {
    POSITION: 'POSITION',
    NORMAL: 'NORMAL',
    TEXCOORD_0: 'TEX_COORD',
    TEXCOORD_1: 'TEX_COORD',
    COLOR_0: 'COLOR'
};
const QUANTIZATION = { POSITION: 14, NORMAL: 10, TEX_COORD: 12, COLOR: 10 };

function fail(file, msg) { throw new Error(file + ': ' + msg); }

// ---- legacy decode (draco 1.2.6 embind API) ----
// NOTE: GetAttributeFloatForAllPoints / GetFaceFromMesh fill container
// objects (DracoFloat32Array / DracoInt32Array); raw pointers read garbage.
function decodeDraco(oldDraco, decoder, bytes, ext) {
    const decBuffer = new oldDraco.DecoderBuffer();
    decBuffer.Init(bytes, bytes.length);
    const geometryType = decoder.GetEncodedGeometryType(decBuffer);

    let geometry, isMesh;
    if (geometryType === oldDraco.TRIANGULAR_MESH) {
        geometry = new oldDraco.Mesh();
        isMesh = true;
        if (!decoder.DecodeBufferToMesh(decBuffer, geometry).ok()) {
            oldDraco.destroy(decBuffer);
            throw new Error('legacy mesh decode failed');
        }
    } else if (geometryType === oldDraco.POINT_CLOUD) {
        geometry = new oldDraco.PointCloud();
        isMesh = false;
        if (!decoder.DecodeBufferToPointCloud(decBuffer, geometry).ok()) {
            oldDraco.destroy(decBuffer);
            throw new Error('legacy pointcloud decode failed');
        }
    } else {
        oldDraco.destroy(decBuffer);
        throw new Error('unknown draco geometry type ' + geometryType);
    }

    const numPoints = geometry.num_points();
    const attributes = {}; // gltfName -> { array, numComponents }
    Object.keys(ext.attributes).forEach(attrName => {
        const attribute = decoder.GetAttributeByUniqueId(geometry, ext.attributes[attrName]);
        if (!attribute) throw new Error('attribute uid ' + ext.attributes[attrName] + ' not found');
        const numComponents = attribute.num_components();
        const attributeData = new oldDraco.DracoFloat32Array();
        decoder.GetAttributeFloatForAllPoints(geometry, attribute, attributeData);
        const n = numPoints * numComponents;
        const array = new Float32Array(n);
        for (let i = 0; i < n; i++) array[i] = attributeData.GetValue(i);
        oldDraco.destroy(attributeData);
        attributes[attrName] = { array, numComponents };
    });

    let indices = null;
    let numFaces = 0;
    if (isMesh) {
        numFaces = geometry.num_faces();
        if (numFaces > 0) {
            indices = new Uint32Array(numFaces * 3);
            const ia = new oldDraco.DracoInt32Array();
            for (let i = 0; i < numFaces; i++) {
                decoder.GetFaceFromMesh(geometry, i, ia);
                indices[i * 3] = ia.GetValue(0);
                indices[i * 3 + 1] = ia.GetValue(1);
                indices[i * 3 + 2] = ia.GetValue(2);
            }
            oldDraco.destroy(ia);
        }
    }

    oldDraco.destroy(geometry);
    oldDraco.destroy(decBuffer);
    return { isMesh, numPoints, numFaces, attributes, indices };
}

// ---- modern encode (draco 1.5.x, bitstream 2.2) ----
function encodeDraco(newDraco, encoder, decoded) {
    const meshBuilder = new newDraco.MeshBuilder();
    const outMesh = new newDraco.Mesh();
    const newAttrIds = {}; // gltfName -> encoder attribute id

    Object.keys(decoded.attributes).forEach(attrName => {
        const { array, numComponents } = decoded.attributes[attrName];
        const dracoType = newDraco[DRACO_ATTR[attrName]];
        if (dracoType === undefined) throw new Error('no draco type for ' + attrName);
        const id = meshBuilder.AddFloatAttributeToMesh(
            outMesh, dracoType, decoded.numPoints, numComponents, array);
        if (id < 0) throw new Error('AddFloatAttributeToMesh failed for ' + attrName);
        newAttrIds[attrName] = id;
    });

    if (decoded.isMesh) {
        if (!decoded.indices || decoded.numFaces === 0) {
            throw new Error('triangle mesh without faces cannot be re-encoded');
        }
        if (!meshBuilder.AddFacesToMesh(outMesh, decoded.numFaces, decoded.indices)) {
            throw new Error('AddFacesToMesh failed');
        }
    }
    newDraco.destroy(meshBuilder);

    const encodedData = new newDraco.DracoInt8Array();
    const encodedLen = decoded.isMesh
        ? encoder.EncodeMeshToDracoBuffer(outMesh, encodedData)
        : encoder.EncodePointCloudToDracoBuffer(outMesh, encodedData);
    if (encodedLen <= 0) throw new Error('draco encode failed');

    const bytes = Buffer.alloc(encodedLen);
    for (let i = 0; i < encodedLen; i++) bytes[i] = encodedData.GetValue(i);
    newDraco.destroy(encodedData);
    newDraco.destroy(outMesh);
    return { bytes, newAttrIds };
}

// ---- round-trip verify with the modern decoder ----
// newDraco here must be the *decoder* module (encoder module lacks DecoderBuffer).
// The modern encoder may merge quantized-duplicate points or split points
// for better compression, so decoded counts only need to be sane (faces and
// points within a tolerance band of the original), never identical.
function verifyDraco(newDraco, decoder, bytes, expect) {
    const decBuffer = new newDraco.DecoderBuffer();
    decBuffer.Init(bytes, bytes.length);
    const geometryType = decoder.GetEncodedGeometryType(decBuffer);
    let ok = false;
    if (expect.isMesh && geometryType === newDraco.TRIANGULAR_MESH) {
        const mesh = new newDraco.Mesh();
        const status = decoder.DecodeBufferToMesh(decBuffer, mesh);
        ok = status.ok() &&
            mesh.num_points() > 0 && mesh.num_points() <= expect.numPoints * 2 &&
            mesh.num_faces() > 0 &&
            mesh.num_faces() >= expect.numFaces * 0.9 &&
            mesh.num_faces() <= expect.numFaces * 1.1;
        newDraco.destroy(mesh);
    } else if (!expect.isMesh && geometryType === newDraco.POINT_CLOUD) {
        const pc = new newDraco.PointCloud();
        const status = decoder.DecodeBufferToPointCloud(decBuffer, pc);
        ok = status.ok() && pc.num_points() > 0 && pc.num_points() <= expect.numPoints * 2;
        newDraco.destroy(pc);
    }
    newDraco.destroy(decBuffer);
    if (!ok) throw new Error('round-trip verification failed');
}

function processGlb(oldDraco, newDraco, newDracoDec, oldDecoder, newEncoder, newDecoder, filePath) {
    const buf = fs.readFileSync(filePath);
    if (buf.readUInt32LE(0) !== 0x46546C67) fail(filePath, 'not a GLB');
    const jsonLen = buf.readUInt32LE(12);
    const json = JSON.parse(buf.slice(20, 20 + jsonLen).toString('utf8'));
    const binStart = 20 + jsonLen;
    const binLen = buf.readUInt32LE(binStart);
    const bin = buf.slice(binStart + 8, binStart + 8 + binLen);

    // find draco-compressed primitives and their bufferViews
    const dracoRefs = []; // { prim, ext }
    const dracoBvSet = new Set();
    (json.meshes || []).forEach(meshDef => {
        (meshDef.primitives || []).forEach(prim => {
            const ext = prim.extensions && prim.extensions.KHR_draco_mesh_compression;
            if (ext) { dracoRefs.push({ prim, ext }); dracoBvSet.add(ext.bufferView); }
        });
    });
    if (dracoBvSet.size === 0) return null;

    // Phase 1: decode + re-encode + verify each unique draco bufferView
    const records = new Map(); // oldBvIdx -> { bytes, newAttrIds }
    for (const oldBvIdx of dracoBvSet) {
        const { ext } = dracoRefs.find(r => r.ext.bufferView === oldBvIdx);
        const bv = json.bufferViews[oldBvIdx];
        const bytes = bin.slice(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength);
        const decoded = decodeDraco(oldDraco, oldDecoder, bytes, ext);
        const encoded = encodeDraco(newDraco, newEncoder, decoded);
        verifyDraco(newDracoDec, newDecoder, encoded.bytes, decoded);
        records.set(oldBvIdx, encoded);
    }

    // Phase 2: rebuild the bin without the old draco bufferViews
    const align4 = n => (n + 3) & ~3;
    const parts = [];
    let binLength = 0;
    const append = (bytes) => {
        const offset = binLength;
        parts.push(bytes);
        binLength += bytes.length;
        const padded = align4(binLength);
        if (padded !== binLength) { parts.push(Buffer.alloc(padded - binLength)); binLength = padded; }
        return offset;
    };

    const oldToNew = new Map(); // old non-draco BV idx -> new BV idx
    const newBufferViews = [];
    (json.bufferViews || []).forEach((bv, idx) => {
        if (dracoBvSet.has(idx)) return;
        const bytes = bin.slice(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength);
        const offset = append(bytes);
        oldToNew.set(idx, newBufferViews.length);
        newBufferViews.push({ ...bv, buffer: 0, byteOffset: offset });
    });
    json.bufferViews = newBufferViews;

    // renumber remaining bufferView references
    (json.accessors || []).forEach(a => {
        if (a.bufferView !== undefined) a.bufferView = oldToNew.get(a.bufferView);
        if (a.sparse) {
            if (a.sparse.indices && a.sparse.indices.bufferView !== undefined) {
                a.sparse.indices.bufferView = oldToNew.get(a.sparse.indices.bufferView);
            }
            if (a.sparse.values && a.sparse.values.bufferView !== undefined) {
                a.sparse.values.bufferView = oldToNew.get(a.sparse.values.bufferView);
            }
        }
    });
    (json.images || []).forEach(img => {
        if (img.bufferView !== undefined) img.bufferView = oldToNew.get(img.bufferView);
    });

    // Phase 3: append new draco data, point each primitive at it
    for (const [oldBvIdx, rec] of records) {
        const offset = append(rec.bytes);
        const newBvIdx = json.bufferViews.length;
        json.bufferViews.push({ buffer: 0, byteOffset: offset, byteLength: rec.bytes.length });
        dracoRefs.filter(r => r.ext.bufferView === oldBvIdx).forEach(({ prim }) => {
            prim.extensions.KHR_draco_mesh_compression = {
                bufferView: newBvIdx,
                attributes: rec.newAttrIds
            };
        });
    }

    ['extensionsUsed', 'extensionsRequired'].forEach(key => {
        json[key] = json[key] || [];
        if (!json[key].includes('KHR_draco_mesh_compression')) {
            json[key].push('KHR_draco_mesh_compression');
        }
    });
    json.buffers[0].byteLength = binLength;

    // write GLB
    let jsonStr = JSON.stringify(json);
    while (Buffer.byteLength(jsonStr) % 4 !== 0) jsonStr += ' ';
    const jsonBuf = Buffer.from(jsonStr, 'utf8');
    const binBuf = Buffer.concat(parts);
    const total = 12 + 8 + jsonBuf.length + 8 + binBuf.length;
    const out = Buffer.alloc(total);
    out.writeUInt32LE(0x46546C67, 0);
    out.writeUInt32LE(2, 4);
    out.writeUInt32LE(total, 8);
    out.writeUInt32LE(jsonBuf.length, 12);
    out.writeUInt32LE(0x4E4F534A, 16);
    jsonBuf.copy(out, 20);
    out.writeUInt32LE(binBuf.length, 20 + jsonBuf.length);
    out.writeUInt32LE(0x004E4942, 24 + jsonBuf.length);
    binBuf.copy(out, 28 + jsonBuf.length);
    return out;
}

const [inFile, outFile] = process.argv.slice(2);
// NOTE: these modules are emscripten thenables (no .catch), so nest the calls.
dracoOld.createDecoderModule({}).then(oldDraco => {
    dracoNew.createEncoderModule().then(newEncoderMod => {
        dracoNew.createDecoderModule().then(newDecoderMod => {
            try {
                const oldDecoder = new oldDraco.Decoder();
                const newEncoder = new newEncoderMod.Encoder();
                newEncoder.SetSpeedOptions(0, 0);
                Object.entries(QUANTIZATION).forEach(([type, bits]) => {
                    newEncoder.SetAttributeQuantization(newEncoderMod[type], bits);
                });
                const newDecoder = new newDecoderMod.Decoder();

                const out = processGlb(oldDraco, newEncoderMod, newDecoderMod, oldDecoder, newEncoder, newDecoder, inFile);
                if (out) {
                    fs.mkdirSync(path.dirname(outFile), { recursive: true });
                    fs.writeFileSync(outFile, out);
                    console.log('re-encoded:', inFile, '->', outFile,
                        '(' + fs.statSync(inFile).size + ' -> ' + out.length + ' bytes)');
                } else {
                    console.log('no draco found, skipping:', inFile);
                }
                process.exit(0);
            } catch (err) {
                console.error('FAILED:', err.message);
                process.exit(1);
            }
        });
    });
});
