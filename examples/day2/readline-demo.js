import readline from 'readline-sync';
// reading string
let username = readline.question('Enter username: ');
console.log(`Username: ${username}`);
// reading int/float
let age = readline.questionInt('Enter age: ');
console.log(`Age: ${age}`);
let salary = readline.questionFloat('Enter salary: ');
console.log(`Salary: ${salary}`);
// password must have at least 12 characters, 1 uppercase, lowercase, number, special character
let pass = readline.questionNewPassword('Enter password: ');
console.log(`Password: ${pass}`);
// try questionEmail
let email = readline.questionEMail('Enter email: ');
console.log(`Email: ${email}`);