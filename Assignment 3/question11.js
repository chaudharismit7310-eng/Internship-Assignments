const students = {

    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let output = {};

for(let student in students) {

    let marks = Object.values(students[student]);

    let total = marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    let average = total / marks.length;

    output[student] = {
        average: average
    };
}

console.log(output);