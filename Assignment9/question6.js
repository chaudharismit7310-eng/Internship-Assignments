// Greeting using object

let person = {
  name: "Smit",
  age: 21,
  occupation: "Student"
};

function greetPerson(obj) {
  console.log(
    "Hello, my name is " +
      obj.name +
      ". I am " +
      obj.age +
      " years old and I am a " +
      obj.occupation
  );
}

greetPerson(person);