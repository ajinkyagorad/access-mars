const fs = require('fs');
const path = require('path');

function convertFile(srcPath, outPath, name) {
  let code = fs.readFileSync(srcPath, 'utf8');
  
  // Replace ES module imports from 'three' with THREE global
  code = code.replace(
    /import\s+\{([^}]+)\}\s+from\s+['"](?:three|three\/src\/[^'"]*)['"]/g,
    (match, imports) => {
      const vars = imports.split(',').map(s => s.trim().split(/\s+as\s+/).pop()).filter(s => s);
      return vars.map(v => 'var ' + v + ' = THREE.' + v + ';').join('\n');
    }
  );
  
  // Remove other imports
  code = code.replace(/import\s+['"][^'"]+['"]/g, '');
  code = code.replace(/import\s+\*\s+as\s+\w+\s+from\s+['"][^'"]+['"]/g, '');
  
  // Replace exports
  code = code.replace(/export\s+default\s+(\w+)/g, 'THREE.' + name + ' = $1;');
  code = code.replace(/export\s+\{([^}]+)\}/g, '');
  
  code = '/* Auto-converted from Three.js r184 ' + name + ' for browserify */\n' +
         '(function() {\n' +
         'var THREE = window.THREE;\n' +
         code + '\n' +
         '})();\n';
  
  fs.writeFileSync(outPath, code);
  console.log('Written:', outPath, 'size:', code.length, 'bytes');
  return code;
}

const base = path.join(__dirname, '..', 'node_modules/three/examples/jsm');

// Convert main dependencies first
convertFile(
  path.join(base, 'utils/BufferGeometryUtils.js'),
  path.join(__dirname, '..', 'src/js/third_party/three/utils/BufferGeometryUtils.js'),
  'BufferGeometryUtils'
);

convertFile(
  path.join(base, 'utils/SkeletonUtils.js'),
  path.join(__dirname, '..', 'src/js/third_party/three/utils/SkeletonUtils.js'),
  'SkeletonUtils'
);

// Convert main loaders
convertFile(
  path.join(base, 'loaders/DRACOLoader.js'),
  path.join(__dirname, '..', 'src/js/third_party/three/draco-loader.js'),
  'DRACOLoader'
);

convertFile(
  path.join(base, 'loaders/GLTFLoader.js'),
  path.join(__dirname, '..', 'src/js/third_party/three/gltf-loader.js'),
  'GLTFLoader'
);

console.log('\nAll conversions complete!');