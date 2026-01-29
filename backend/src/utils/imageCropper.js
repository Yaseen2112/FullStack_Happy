const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const cropAndSave = async (buffer, folder, filename) => {
    const uploadsDir = path.join(__dirname, '..', '..', 'uploads', folder);
    ensureDir(uploadsDir);
    const outputPath = path.join(uploadsDir, filename);

    await sharp(buffer)
        .resize(450, 350, { fit: 'cover' })
        .toFile(outputPath);

    return `/uploads/${folder}/${filename}`;
};

module.exports = { cropAndSave };
