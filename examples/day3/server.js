import http from 'http';
import url from 'url';

// create server
http.createServer( ( request, response ) => { 
    response.writeHead(200, {'content-type':'text/html'});
    let query = url.parse(request.url, true).query;
    let name = query.name;
    let salary = query.salary;
    response.write('<h2>Hello Web App</h2>');
    response.write(`<h3>Name = ${name}, Salary = ${salary}</h3>`);
    response.end();
} ).listen(9090, () => console.log('Server is running'));