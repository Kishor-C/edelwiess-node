import read from 'readline-sync';
import fs from 'fs';
import {EmployeeMapper} from './employee-mapper.js';
let input = 0;
let mapper = new EmployeeMapper();
do {
    let eid = read.questionInt('Enter id: ');
    let ename = read.question('Enter name: ');
    let esalary = read.questionFloat('Enter salary: ');
    let employee = {id: eid, name: ename, salary: esalary};
    mapper.writeEmployee(employee);
    input = read.questionInt('Enter -1 to quit or some other key to continue: ')
} while(input != -1);

