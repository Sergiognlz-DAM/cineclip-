const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Reemplaza /_expo/ por /TFG-SergioGonzalez/_expo/
html = html.replace(/\/_expo\//g, '/cineclip-/_expo/');
html = html.replace(/href="\/favicon/g, 'href="/cineclip-/favicon');
// Reemplaza /favicon por /TFG-SergioGonzalez/favicon
html = html.replace(/href="\/favicon/g, 'href="/cineclip-/favicon');

fs.writeFileSync(indexPath, html);
console.log('✅ Paths corregidos en index.html');