import { ObjectId } from 'mongodb'
import {db} from '../db/mongoDB.js'


const users = db.collection('users')

async function createUser(user){
    const res = await users.insertOne(user)
    return {
        id: res.insertedId,
        ...user
    }
}

function getUserByID(id) {
    return users.findOne({_id: new ObjectId(id)})
}

function getUserByEmail(email) {
    return users.findOne({email: email})
}

export default {
    createUser,
    getUserByEmail,
    getUserByID
}