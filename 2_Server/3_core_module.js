let fs = require('fs');
let os = require('os');

let user =os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi ' + user.username + '!\n',()=>{
    console.log("File is created.")
});

console.log(os);

// Visit Nodejs website to study APIs
// Ctrl + c to exit nodemon
