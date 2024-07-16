// Problem 6: 'lodash' Usage
// Use the lodash library to solve the following problem: Given an array of numbers, write a
// function that returns the sum of all even numbers in the array. Use the _.sumBy function from
// lodash to achieve this.

let _ = require('lodash');
let arr = [1,2,3,4,5,6,7];
let f = _.filter(arr,num => num %2===0 );

let sum = _.sumBy(f);
console.log(sum);