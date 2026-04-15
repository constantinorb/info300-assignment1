// Name: Reed 
// Program #4: Broken Code Debugger

const readlineSync = require('readline-sync');

let start = parseInt(readlineSync.question("Enter start number: ")); // Fixed: used parseInt so the input is treated like a number
let end = parseInt(readlineSync.question("Enter end number: ")); // Fixed: used parseInt so the input is treated like a number

let count = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 == 0) { // Fixed: changed i / 2 == 0 to i % 2 == 0 to correctly check if a number is even
        count += 1; // Fixed: changed =+ to += so count increases by 1 each time
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);