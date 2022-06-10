import { ObjectId } from 'mongodb'
import { Database, Product} from '../../../lib/types';

export const productsResolvers = {
    Query: {
        products: async (_root: undefined, _args: {}, { db }: { db: Database }): Promise<Product[]>  => {
            return await db.products.find({}).toArray() 
        }
    },
    // Mutation: {
    //     deleteListing: async(_root: undefined, { id }: {id: string}, { db }: { db: Database }) : Promise<Listing> => {
    //         const deleteRes = await db.listings.findOneAndDelete({
    //             _id: new ObjectId(id)
    //         })
            
    //         if(!deleteRes.value){
    //             throw new Error('failed to delete listing')
    //         }

    //         return deleteRes.value
    //         // for(let i = 0; i < listings.length; i++){
    //         //     if(listings[i].id === id){
    //         //         return listings.splice(i, 1)[0]
    //         //     }
    //         // }
    //         // throw new Error("failed to delete listing")
    //     }
    // },
    // Listing: {
    //     id: (listing: Listing) => listing._id.toString()
    // }
}