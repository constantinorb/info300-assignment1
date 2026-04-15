// Name: Reed
// Program #4: Broken Code Debugger

const readlineSync = require('readline-sync');

let start = parseInt(readlineSync.question("Enter start number: ")); // Fixed: convert input to number
let end = parseInt(readlineSync.question("Enter end number: ")); // Fixed: convert input to number

let count = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 == 0) { // Fixed: use modulus to check even numbers
        count += 1; // Fixed: += instead of =+
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);