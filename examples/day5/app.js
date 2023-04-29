import express from "express";
import { getConnection } from "./dbutility.js";
import cors from "cors";

let app = express();

// using body parser & cors in the middleware
app.use(express.json()); // parse the json from the request
app.use(cors()); // enabling the cors

// start the server in some port
app.listen(9090, () => console.log("Server running in 9090"));
// API to store 
app.post('/users', (request, response) => {
    let body = request.body;
    let connection = getConnection();
    connection
    .then(client => {
        let db = client.db("mydb");
        // you can generate value for _id before calling insertOne
        db.collection("users").insertOne(body)
        .then(value => response.status(201).json(value))
        .catch(err => response
            .status(409).json({"error":err, "message":`ID: ${err.keyValue._id} already exists`}))
        .finally(() => client.close())
    })
    .catch(err => response.status(500).json({"error":err, "message":"Database Connection Error"}))
});
// API to retrieve the data based on the id
app.get('/users/:id', (request, response) => {
    let id = parseInt(request.params.id);
    let connection = getConnection();
    connection.then(client => {
        let db = client.db("mydb");
        db.collection("users").findOne({_id: id})
        .then(value => {
            if(value == null || value == undefined) {
                response.status(404)
                .json({"error":`Record not found with an id: ${id}`, "value":value})
            } else {
                response.status(200).json(value);
            }
        })
        .catch(err => response.status(404).json(err))
        .finally(() => client.close());
    })
    .catch(err => response.status(500).json({"error":err, "message":"Database Connection Error"}))
});
// API to retreive all the records
app.get("/users", (request, response) => {
    let connection = getConnection();
    connection.then(client => {
        let db = client.db("mydb");
        db.collection("users").find().toArray()
        .then(value => response.json(value))
        .finally(() => client.close())
    })
    .catch(err => response.status(500>json({"error":err, "message":"Database Connection Error"})));
});

// API to delete the record based on id
app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    let connection = getConnection();
    connection.then(client => {
        let db = client.db("mydb");
        db.collection("users").deleteOne({_id: id})
        .then(value => {
            if(value.deletedCount == 0) {
                response.status(404).json({"error":`Record with an id: ${id} is not found`})
            } else {
                response.status(200).json({"message":`Record with an id: ${id} is deleted`})
            }
        })
        .catch(err => response.json(err))
        .finally(() => client.close());
    })
    .catch(err => response.status(500>json({"error":err, "message":"Database Connection Error"})))
});
// API to update the dob based on the id
app.put('/users/:id/:dob', (request, response) => {
    let id = parseInt(request.params.id);
    let birthday = request.params.dob;
    let connection = getConnection();
    connection
    .then(client => {
        let db = client.db("mydb");
        db.collection("users").updateOne({_id: id}, {$set: {dob: birthday}})
        .then(value => response.json(value))
        .catch(err => response.json(err))
        .finally(() => client.close())
    })
    .catch(err => response.status(500>json({"error":err, "message":"Database Connection Error"})))
});