const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax(salary) {

    let tax = 0;
    let category;

    switch(true) {

        case (salary > 0 && salary <= 500000):
            tax = salary * 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            return "Invalid Salary";
    }

    return tax;
}

rl.question("Enter your salary: ", function(input) {

    let salary = parseFloat(input);

    let result = findTax(salary);

    console.log("Tax Amount = " + result);

    rl.close();
});