// Name: Reed
// Program #1: Detect Prime Gaps

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter a positive number up to 1000: "));

if (n <= 0 || n > 1000 || isNaN(n)) {
    console.log("Invalid input.");
} else {
    let primes = [];

    for (let i = 2; i <= n; i++) {
        let prime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            primes.push(i);
        }
    }

    console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

    let largestGap = 0;
    let gapStart = 0;
    let gapEnd = 0;
    let total = 0;

    for (let i = 0; i < primes.length - 1; i++) {
        let gap = primes[i + 1] - primes[i];
        total += gap;

        if (gap > largestGap) {
            largestGap = gap;
            gapStart = primes[i];
            gapEnd = primes[i + 1];
        }
    }

    let avg = total / (primes.length - 1);

    console.log("The largest gap is " + largestGap + ", between " + gapStart + " and " + gapEnd);
    console.log("The average gap is " + avg.toFixed(2));
}