const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./components');
files.push('./app/layout.tsx');
files.push('./app/page.tsx');
files.push('./app/servicios/page.tsx');
files.push('./app/quienes-somos/page.tsx');

let changedCount = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const regex1 = /style=\{\{\s*fontFamily:\s*["']var\(--font-playfair\)["']\s*\}\}/g;
    
    if (regex1.test(content) || content.includes('--font-playfair')) {
      content = content.replace(regex1, '');
      content = content.replace(/style=\{\{\s*\}\}/g, '');
      fs.writeFileSync(file, content);
      console.log('Updated', file);
      changedCount++;
    }
  }
});
console.log('Total files changed:', changedCount);
