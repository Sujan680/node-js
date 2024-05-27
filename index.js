// console.log("HEllo world"); 


// Modules in node js importing the function
// const math = require("./math"); 

// this is destructuring method
const {Sub, Sum} = require("./math");

console.log("The value is : ",Sub(3,4));
console.log("The value of a & b is", Sum(3,9));