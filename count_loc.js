const fs = require('fs');
const path = require('path');

function countDirectory(dir, filterExt = ['.ts', '.js', '.html', '.md', '.json']) {
  let totalLines = 0;
  let totalFiles = 0;
  let breakdown = {};

  function scan(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'coverage') {
          scan(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (filterExt.includes(ext)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const lines = content.split('\n').length;
          totalLines += lines;
          totalFiles++;

          const relDir = path.relative(path.join(__dirname, 'src'), currentPath);
          const topFolder = relDir.split(path.sep)[0] || 'root';
          breakdown[topFolder] = (breakdown[topFolder] || 0) + lines;
        }
      }
    }
  }

  scan(dir);
  return { totalLines, totalFiles, breakdown };
}

const srcDir = path.join(__dirname, 'src');
const srcStats = countDirectory(srcDir, ['.ts']);
const projectStats = countDirectory(__dirname, ['.ts', '.js', '.html', '.md', '.json']);

console.log('=============================================');
console.log('  OMNIQUEST - EXACT CODEBASE LINE COUNTS');
console.log('=============================================');
console.log(`Production TypeScript Files (src/): ${srcStats.totalFiles} files`);
console.log(`Production Lines of Code (src/):    ${srcStats.totalLines} LOC`);
console.log('---------------------------------------------');
console.log(`Total Project Files:                ${projectStats.totalFiles} files`);
console.log(`Total Project Lines (all files):    ${projectStats.totalLines} lines`);
console.log('=============================================');
