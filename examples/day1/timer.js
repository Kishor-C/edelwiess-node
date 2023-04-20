console.log(1);
setTimeout(function() {
    console.log('first callback')
}, 3);
setTimeout(function() {
    console.log('second callback')
}, 2)
console.log(2);

