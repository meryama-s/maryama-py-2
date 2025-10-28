import mongoose from 'mongoose';

//TODO: connecting express with mongoDB
export async function connectMongo(url){
    if(!url){
        throw new Error('MONGO_URL is required');
        await mongoose.connect(url, {db_name :'freelace_hub'});
        console.log('MongoDB connected');
    }
}