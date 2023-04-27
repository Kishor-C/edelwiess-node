import fs from 'fs';
// a class that takes care of providing functions to 
// read and write javascript objects into the json file
export class EmployeeMapper {
    // return javascript array
    readEmployee() {
        let employees = [];
        if(fs.existsSync('employees.json')) {
            let empJSON = fs.readFileSync('employees.json')
                .toString();
            employees = JSON.parse(empJSON);
            return employees;
        } else {
            throw 'File is not available';
        } 
    }
    // take javascript object and write to the JSON file
    writeEmployee(emp) {
        try {
            let employees = this.readEmployee();
            employees.push(emp);
            fs.writeFileSync('employees.json', 
                JSON.stringify(employees));
            console.log('File is written');
        } catch(err) {
            console.log(err);
            let newArray = [];
            fs.writeFileSync('employees.json', 
                JSON.stringify(newArray));
            console.log('File is written with an empty array');
        }
    }
}