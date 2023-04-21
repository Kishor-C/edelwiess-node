import fs from 'fs';

let emp = { id : 100, name : "Raj", salary: 32000 };
// writing the json
fs.writeFileSync('emps.json', JSON.stringify(emp));

console.log('DONE')
// reading the json
let empDataJSON = fs.readFileSync('emps.json');
let empJS = JSON.parse(empDataJSON);
console.log(`ID: ${empJS.id}`)
