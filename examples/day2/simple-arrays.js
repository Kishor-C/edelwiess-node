let items = [15, 5, 10, 25, 35, 30];
console.log(`Before sorting: ${items}`);

let sortedItemsAsc = items.sort((x, y) => x - y);
console.log(`Sorting in ascending order: ${sortedItemsAsc}`);

let sortedItemsDesc = items.sort((x, y) => y - x);
console.log(`Sorting in descending order: ${sortedItemsAsc}`);

let items2 = [10, 5, 15]
let sum = items2.reduce((pre, cur) => {
    console.log(`Previous = ${pre}, Current = ${cur}`)
    return pre + cur;
});
console.log(`Sum = ${sum}`);
