let db;
import { MongoClient } from 'mongodb';

async function connectToDb(cb){
    // local mongoDB
    //const client = new MongoClient('mongodb://127.0.0.1:27017'); 
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yivn3sf.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
}