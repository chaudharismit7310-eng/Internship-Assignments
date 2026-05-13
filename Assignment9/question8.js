// Object keys

function getObjectKeys(obj) {
  return Object.keys(obj);
}

let student = {
  name: "Smit",
  age: 21,
  city: "Surat"
};

console.log(getObjectKeys(student));