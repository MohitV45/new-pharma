const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  'src/assets',
  'src/assets/gallery'
];

async function convertToWebp() {
  for (const dir of directories) {
    const absoluteDir = path.resolve(dir);
    if (!fs.existsSync(absoluteDir)) continue;

    const files = fs.readdirSync(absoluteDir);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(absoluteDir, file);
        const outputPath = path.join(absoluteDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Successfully converted ${file} to ${path.basename(outputPath)}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

convertToWebp();
