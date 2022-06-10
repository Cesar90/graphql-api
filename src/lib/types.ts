import { Collection, ObjectId } from "mongodb";

export interface Listing{
    _id: ObjectId;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
}

export interface Product{
    _id: ObjectId;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    onSale: boolean;
    category: ObjectId
}

export interface Category{
    _id: ObjectId;
    name: string;
}

export interface Review{
    _id: ObjectId;
    date: string;
    title: string;
    comment: string;
    rating: number;
    product: ObjectId
}

export interface Database{
    listings: Collection<Listing>;
    products: Collection<Product>;
    categories: Collection<Category>;
    reviews: Collection<Review>;
}