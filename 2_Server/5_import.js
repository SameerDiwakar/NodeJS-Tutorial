const exp = require('./4_export');
console.log("Server File is Available");

let age = exp.age;

let result = exp.addnum(age,18);
console.log(age);
console.log("Result is->"+result);
