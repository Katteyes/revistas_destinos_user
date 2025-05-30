import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'assets/originals');
const outputDir = path.join(__dirname, 'assets/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [720, 1280, 1920];

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error leyendo la carpeta de originales:', err);
    return;
  }

  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    sizes.forEach(size => {
      const outputFileName = `${baseName}-${size}${ext}`;
      const outputPath = path.join(outputDir, outputFileName);

      sharp(inputPath)
        .resize({ width: size })
        .toFile(outputPath)
        .then(() => {
          console.log(`Generado: ${outputFileName}`);
        })
        .catch(err => {
          console.error(`Error procesando ${file} para tamaño ${size}:`, err);
        });
    });
  });
});
