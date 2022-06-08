import { MongoClient } from 'mongodb'
import { Database } from '../lib/types'

console.log(process.env.DB_USER)
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/proshop?retryWrites=true&w=majority`

export const connectDatabase = async(): Promise<Database> => {
    const client = await MongoClient.connect(url, {})

    const db = client.db('main')
    return {
        listings: db.collection('test_listings')
    }
}