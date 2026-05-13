// push() and pop()

function modifyArray(arr) {
  arr.push("New Item");

  console.log("After Push =", arr);

  arr.pop();

  return arr;
}

let numbers = [1, 2, 3, 4];

console.log("Final Array =", modifyArray(numbers));