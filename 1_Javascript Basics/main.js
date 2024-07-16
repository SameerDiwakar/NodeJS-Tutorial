var prompt = require("prompt-sync")();
// To use prompt in terminal and take user input use syntax above
// and copy and paste npm prompt sync in terminal

let age = prompt("Enter your age: ");

if (age > 18) {
  console.log("You can apply for driving license.");
} else {
  console.log("You are underage.");
}
