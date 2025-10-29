import fs from 'fs';

export function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

export function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('File written successfully.');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
