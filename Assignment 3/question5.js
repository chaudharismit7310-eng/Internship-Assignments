const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function correctfn(string, wrong, correct) {

    return string.replace(wrong, correct);
}

rl.question("Enter a sentence: ", function(sentence) {

    rl.question("Enter wrong word: ", function(wrongWord) {

        rl.question("Enter correct word: ", function(correctWord) {

            let output = correctfn(sentence, wrongWord, correctWord);

            console.log("Updated Sentence:");
            console.log(output);

            rl.close();
        });
    });
});