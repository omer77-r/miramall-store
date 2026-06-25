const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public/products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.webp') || f.endsWith('.png'));

let html = '<!DOCTYPE html><html><body style="background:white;"><div style="display:flex; flex-wrap:wrap; gap:20px;">';

files.forEach(file => {
  html += `<div style="width:200px; border:1px solid #ccc; padding:10px;">
    <img src="/products/${file}" style="width:100%; height:auto;" />
    <p style="font-size:12px; word-break:break-all;">${file}</p>
  </div>`;
});

html += '</div></body></html>';

fs.writeFileSync(path.join(__dirname, 'public/test-gallery.html'), html);
console.log('Gallery generated');
