import { MongoClient } from "mongodb";

export function getConnection() {
    return MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true});
}