import express from 'express';
import {getConnection} from './dboperations.js';
let app = express();

app.listen(9090, () => console.log("server is running in 9090"));
app.use(express.json());
app.get('/test', (request, response) => {
    getConnection()
    .then(client => {
        let db = client.db("mydb");
        let arr = []
        db.collection("test").find().forEach(doc => arr.push(doc))
        .then(() => response.json(arr))
        .catch(err => response.json({"error":"Something went wrong"}))
        .finally(() => client.close())
    })
    .catch(err => console.log(err))
});
// how to store the data
app.post('/test', (request, response) => {
    let data = request.body;
    getConnection().then(client => {
        let db = client.db("mydb");
        db.collection("test").insertOne(data)
        .then(value => response.json(value))
        .catch(err => response.json({"message":"Data failed to store"}))
        .finally(() => client.close())
    }).catch(err => console.log(err));
});