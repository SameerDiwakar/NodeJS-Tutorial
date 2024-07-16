// Problem 5: Using 'os' Module
// Create a Node.js program that uses the os module to display the following system
// information:
// ● Total memory available (in bytes)
// ● Free memory available (in bytes)
// ● Operating system platform
// ● Numberof CPUcores

const os = require('os');
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.platform());
console.log(os.cpus().length);

