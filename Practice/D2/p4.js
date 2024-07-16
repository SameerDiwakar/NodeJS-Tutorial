// Problem 4: Using the 'fs' Module
// Write a Node.js program that uses the fs module to read the contents of a text file named
// "notes.txt" and display them in the console.

const fs = require('fs');
fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) {
    console.error("Error reading file:", err);
    return;
    }
    console.log(data);
    });