const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(
  path.join(__dirname, '..', 'node_modules/three/examples/jsm/loaders/GLTFLoader.js'),
  'utf8'
);

let code = src;

// Replace ES module imports with THREE global references
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
code = code.replace(/export\s+default\s+(\w+)/g, 'THREE.GLTFLoader = $1;');
code = code.replace(/export\s+\{([^}]+)\}/g, '');

// Add header
code = '/* Auto-converted from Three.js r184 GLTFLoader for browserify */\n' +
       '(function() {\n' +
       'var THREE = window.THREE;\n' +
       code + '\n' +
       '})();\n';

const outPath = path.join(__dirname, '..', 'src/js/third_party/three/gltf2-loader-new.js');
fs.writeFileSync(outPath, code);
console.log('Written:', outPath, 'size:', code.length, 'bytes');