// Problem 3: Callback Functions
// Create a function named performOperation that takes two numbers and a callback
// function as parameters. The callback function should determine the operation to be performed
// (addition, subtraction, multiplication, or division) on the two numbers. Call the
// performOperation function with different numbers and callback functions for each
// mathematical operation.

function performOperation(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
    }
    function add(x, y) {
    return x + y;
    }
    function subtract(x, y) {
    return x - y;
    }
    function multiply(x, y) {
    return x * y;
    }
    function divide(x, y) {
    return x / y;
    }
    console.log(performOperation(10, 5, add));
    console.log(performOperation(10, 5, subtract)); 
    console.log(performOperation(10, 5, multiply)); 
    console.log(performOperation(10, 5, divide)); 
    