import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectMongo } from '#@/database/connect-mongo.js';
import routes from '#@/routes/index.js';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkgPath = path.join(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
console.log(pkg.name);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

connectMongo(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
})
.catch((err) => {
    console.error('failed to connect to DB', err);
    process.exit(1);
});
