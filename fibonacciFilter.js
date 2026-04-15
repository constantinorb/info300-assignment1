// Name: Reed
// Program #2: Fibonacci Filter

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter how many Fibonacci numbers to generate: "));

if (n <= 0 || isNaN(n)) {
    console.log("Invalid input.");
} else {
    let fib = [];

    if (n >= 1) fib.push(0);
    if (n >= 2) fib.push(1);

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    let odd = [];

    for (let i = 0; i < fib.length; i++) {
        if (fib[i] % 2 !== 0) {
            odd.push(fib[i]);
        }
    }

    console.log("Full sequence: [" + fib.join(", ") + "]");
    console.log("Odd Fibonacci numbers: [" + odd.join(", ") + "]");
}