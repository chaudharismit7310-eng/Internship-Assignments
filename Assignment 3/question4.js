const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(str) {

    str = str.toLowerCase();

    let vowels = 0;
    let consonants = 0;

    for(let char of str) {

        if(char >= 'a' && char <= 'z') {

            if('aeiou'.includes(char)) {
                vowels++;
            }
            else {
                consonants++;
            }
        }
    }

    console.log("Number of vowels = " + vowels);
    console.log("Number of consonants = " + consonants);

    rl.close();
});