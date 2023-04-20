let items = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// map that applies 20% for each elements
let items20 = items.map((value, index) => value - (value*0.2));
console.log(`Items with 20% discount =  ${items20}`);
// filter that creates a new array matching to the filters
let items15 = items.filter((value, index) => value % 15 == 0);
console.log(`Items divisible by 15 = ${items15}`);

let products = [
    {brand: "Acer", ram: 8, price: 35000},
    {brand: "HP", ram: 16, price: 55000},
    {brand: "Lenovo", ram: 32, price: 85000},
    {brand: "Acer", ram: 16, price: 95000},
    {brand: "HP", ram: 16, price: 75000},
    {brand: "Lenovo", ram: 32, price: 98000},
]
// using map - store the laptops in an array with the price having 15% dicount & display it
// using filter - store the laptops in an array which has price in a range 70000 to 100000 & display it