// Name: Reed
// Program #3: Letter Frequency & First Repeat

const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ");
let text = input.toLowerCase();

let count = {};
let firstRepeat = null;

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if (ch >= 'a' && ch <= 'z') {
        if (!count[ch]) {
            count[ch] = 1;
        } else {
            count[ch]++;

            if (firstRepeat === null) {
                firstRepeat = ch;
            }
        }
    }
}

console.log("Letter frequencies:");

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if (ch >= 'a' && ch <= 'z' && count[ch]) {
        console.log(ch + ": " + count[ch]);
        count[ch] = 0;
    }
}

if (firstRepeat) {
    console.log("First repeated letter: " + firstRepeat);
} else {
    console.log("First repeated letter: None");
}