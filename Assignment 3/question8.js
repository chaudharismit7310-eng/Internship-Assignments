const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function repeatedSum(num) {

    while(num >= 10) {

        let sum = 0;

        while(num > 0) {

            sum += num % 10;

            num = Math.floor(num / 10);
        }

        num = sum;
    }

    return num;
}

rl.question("Enter a number: ", function(input) {

    let number = parseInt(input);

    let result = repeatedSum(number);

    console.log("Single digit result = " + result);

    rl.close();
});