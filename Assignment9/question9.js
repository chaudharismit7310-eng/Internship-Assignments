// Merge objects

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let obj1 = {
  name: "Smit"
};

let obj2 = {
  age: 21
};

console.log(mergeObjects(obj1, obj2));