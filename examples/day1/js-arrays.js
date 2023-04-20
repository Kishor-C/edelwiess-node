let emps = [{name:"Raj", salary:52000}, {name:"Vijay", salary:60000}];

// traditional for loop
for(let i = 0; i < emps.length; i++) {
    console.log(emps[i].name);
}
console.log('___________________');
// for each loop
for(let e of emps) {
    console.log(`Name = ${e.name}, Salary = ${e.salary}`)
}
console.log('___________________');
// forEach function in the array
emps.forEach((item, index) => console.log(item.name));
console.log('---- DONE ----');