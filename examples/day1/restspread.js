function test(a, b, ...c) {
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}
const arr = [8, 7, 6, 4, 3];
test(arr); // a = [8,7,6,4,3], b = undefined, c = []
test(...arr); // a = 8, b = 7, c = [6, 4, 3]
