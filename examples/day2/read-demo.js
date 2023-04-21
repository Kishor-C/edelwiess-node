import fs from 'fs';

let data = fs.readFileSync('hello.txt');
console.log(data);
let strData = data.toString();
console.log(`String Content: ${strData}`)
// writing the file

let content = 'Hello everyone';
fs.writeFileSync('demo.txt', content);
