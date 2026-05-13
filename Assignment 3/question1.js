const states = [
    "Maharashtra",
    "Uttar Pradesh",
    "Assam",
    "Odisha",
    "Karnataka",
    "Andhra Pradesh",
    "Bihar",
    "Tamil Nadu",
    "Uttarakhand",
    "Gujarat"
];

const filteredStates = states.filter(function(state) {

    let firstLetter = state[0].toLowerCase();

    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

console.log("States after removing vowel names:");
console.log(filteredStates);