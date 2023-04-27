import express from 'express';

let app = express();
// middleware to extract JSON from the request
app.use(express.json());

app.listen(9090, () => console.log('Express server is running!'));

app.get('/employee/:empId', (request, response) => { 
    let empId = request.params.empId;
    response.status(200).json({"message": `Retrieve id ${empId}`})
});
app.post('/employee/:empId', (request, response) => { 
    let id = request.params.empId;
    let salary = request.query.salary;
    response.json({"message":`Welcome to post method id: ${id}, salary: ${salary}`})
});
app.post('/', (request, response) => { 
    let data = request.body;
    response.status(200).json({"message": `Hello ${data.name}, your id is ${data.id}`})
});

app.put('/', (request, response) => {
    response.status(200).json({"message":"Put method is called"})
})