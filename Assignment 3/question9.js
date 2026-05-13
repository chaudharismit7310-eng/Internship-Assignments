const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(paragraph) {

    let words = paragraph.trim().split(/\s+/);

    return words.length;
}

rl.question("Enter a paragraph: ", function(input) {

    let result = countWords(input);

    console.log("Number of words = " + result);

    rl.close();
});