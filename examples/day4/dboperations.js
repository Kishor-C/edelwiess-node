import { MongoClient } from 'mongodb';

export function getConnection() {
    return MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true});
}
export function store() {
    // storing the data
    getConnection().then((client) => {
        let db = client.db('mydb');
        db.collection('test').insertOne({"_id":13, "name":"David", "phone":9273000})
        .then(value => console.log(value))
        .catch(err => console.log(err))
        .finally(() => client.close())
    })
    .catch((err) => console.log(err));
}
