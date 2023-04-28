import express from 'express';
let app = express();

// set the jade template engine
app.set('view engine', 'jade');
// app.set('views', 'some-other-location') - not required 

app.get('/', (request, response) => {
    let employees = [
        {id: 100, name: "Raj", salary: 35200}, 
        {id: 200, name: "Vikram", salary: 30000}
    ]
    response.render('my-template', {emp: employees}); 
    // locates views/my-template.jade
});

// start the server
app.listen(9090, () => console.log('Server is running in 9090'));