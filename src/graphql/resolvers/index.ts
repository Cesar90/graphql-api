import merge from 'lodash.merge'
import { listingResolvers } from './Listing'
import { productsResolvers } from './Product'

export const resolvers = merge(listingResolvers, productsResolvers)