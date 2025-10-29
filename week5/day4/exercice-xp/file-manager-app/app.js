import { readFile, writeFile } from './fileManager.js';
import path from 'path';

const helloPath = path.join(process.cwd(), 'Hello World.txt');
const byePath = path.join(process.cwd(), 'Bye World.txt');

const helloContent = readFile(helloPath);
console.log('Content of Hello World.txt:', helloContent);
writeFile(byePath, 'Writing to the file');
