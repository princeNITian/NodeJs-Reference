var counter = function(arr){
    return 'There are ' + arr.length + ' elements.';
}

var adder = function(a,b){
    return `The sum of two numbers is ${a+b}.`;
}

var pi = 3.142;


// // 1st method
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;



// // 2nd Method
// We could directly use module.exports at declaration time of each function
// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements.';
// }


// // 3rd Method
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// };



// we can short it as we can use ES6 expression for objects.
module.exports = {
    counter,
    adder,
    pi
}