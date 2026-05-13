const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfProducts(n1, n2) {

    let sum = 0;

    while(n1 > 0 || n2 > 0) {

        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum = sum + (digit1 * digit2);

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

rl.question("Enter first number: ", function(num1) {

    rl.question("Enter second number: ", function(num2) {

        let n1 = parseInt(num1);
        let n2 = parseInt(num2);

        let result = sumOfProducts(n1, n2);

        console.log("Sum of products = " + result);

        rl.close();
    });
});