function search(key, ...arr) {
    let flag = false;
    for(let a of arr) {
        if(a == key) {
            flag = true;
            break;
        }
    }
    console.log((flag == true) ? `${key} is present` : `${key} is not present`)
}
const key = 8;
const arr = [1, 8, 4, 3]
search(key, ...arr);