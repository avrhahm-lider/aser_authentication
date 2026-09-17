import {MongoClient} from 'mongodb'
import dotenv from 'dotenv/config'
import dns from 'dns'
dns.setServers(['1.1.1.1', '8.8.8.8'])

const client = new MongoClient(process.env.MONGO_URI)

try {
    await client.connect()
    console.log('mongo connected successfully');
    
} catch (e) {
    console.error(e);
    console.log("mongo faild");
    process.exit()
    
}

export const db = client.db('userAuth')