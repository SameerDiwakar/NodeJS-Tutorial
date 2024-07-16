// Problem 2: Writing Functions
// Write a JavaScript function named calculateCircleArea that takes the radius of a circle
// as a parameter and returns the area of the circle. You can use the formula area = π *
// radius^2. Test the function with a few different radii.

var prompt = require("prompt-sync")();
let r = prompt("Enter Radius:");

function calculateCircleArea(rad){
        let area = 3.14 * rad * rad;
        return area;
}

let a =calculateCircleArea(r);
console.log(a);