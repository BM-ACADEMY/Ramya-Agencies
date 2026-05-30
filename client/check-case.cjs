const fs = require('fs');
const path = require('path');

function checkPathCaseSync(filepath) {
  let dir = path.dirname(filepath);
  let base = path.basename(filepath);
  if (dir === '.' || dir === '/' || dir.match(/^[a-zA-Z]:\\$/)) return true;
  
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return false;
  }
  
  if (!files.includes(base)) {
    let match = files.find(f => f.toLowerCase() === base.toLowerCase());
    console.log('Case mismatch:', filepath, '-> found:', match);
    return false;
  }
  return checkPathCaseSync(dir);
}

function traverse(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const importRegex = /from\s+['"]([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        let importPath = match[1];
        if (importPath.startsWith('.')) {
          let resolved = path.resolve(dir, importPath);
          let exts = ['', '.js', '.jsx', '/index.js', '/index.jsx', '.css', '.png', '.svg'];
          let found = false;
          for (let ext of exts) {
            if (fs.existsSync(resolved + ext)) {
               checkPathCaseSync(resolved + ext);
               found = true;
               break;
            }
          }
          if (!found) {
            console.log('Not found:', resolved, 'in', fullPath);
          }
        }
      }
      
      // Also check standard imports: import './styles.css'
      const sideEffectImportRegex = /import\s+['"]([^'"]+)['"]/g;
      while ((match = sideEffectImportRegex.exec(content)) !== null) {
        let importPath = match[1];
        if (importPath.startsWith('.')) {
          let resolved = path.resolve(dir, importPath);
          let exts = ['', '.js', '.jsx', '/index.js', '/index.jsx', '.css', '.png', '.svg'];
          let found = false;
          for (let ext of exts) {
            if (fs.existsSync(resolved + ext)) {
               checkPathCaseSync(resolved + ext);
               found = true;
               break;
            }
          }
          if (!found) {
            console.log('Not found (side effect):', resolved, 'in', fullPath);
          }
        }
      }
    }
  });
}

traverse(path.join(__dirname, 'src'));
console.log('Check complete.');
