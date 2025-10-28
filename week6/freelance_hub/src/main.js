import express from 'express';
import dotenv from 'dotenv';
//NOTE: permition for domain requests
import cors from 'cors';
import {connectMongo} from './database/connect-mongo.js';
import routes from './routes/index.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes); //route prefix

//! if port in env is not working 4000 is the defaulte
const PORT = process.env.PORT || 4000;

//* connect database
connectMongo(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
})
.catch((err)=>{
    console.error('failed to connect to DB', err);
    //! to stop the process if we had a prob of connecting with deployment tools 1
    process.exit(1);
});



