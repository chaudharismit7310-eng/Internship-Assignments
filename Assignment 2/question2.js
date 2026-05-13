const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {

    let result;

    switch(operator) {

        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = (num2 !== 0)
                ? num1 / num2
                : "Cannot divide by zero";
            break;

        default:
            result = "Invalid operator";
    }

    return result;
}

rl.question("Enter first number: ", function(num1) {

    rl.question("Enter second number: ", function(num2) {

        rl.question("Enter operator (+, -, *, /): ", function(operator) {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let answer = calculate(num1, num2, operator);

            console.log("Result = " + answer);

            rl.close();
        });
    });
});