import { MongoClient } from 'mongodb'
import { Database, Listing, Product,Category, Review } from '../lib/types'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/proshop?retryWrites=true&w=majority`

export const connectDatabase = async(): Promise<Database> => {
    const client = await MongoClient.connect(url, {
    })

    const db = client.db('main')
    return {
        listings: db.collection<Listing>('listings'),
        products: db.collection<Product>('products'),
        categories: db.collection<Category>('categories'),
        reviews: db.collection<Review>('reviews')
    }
}