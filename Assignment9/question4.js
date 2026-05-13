// map() square numbers

function squareNumbers() {
  let numbers = [1, 2, 3, 4, 5];

  let squared = numbers.map(function(num) {
    return num * num;
  });

  return squared;
}

console.log(squareNumbers());