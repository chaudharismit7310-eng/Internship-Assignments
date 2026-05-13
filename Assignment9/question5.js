// filter odd numbers

function getOddNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
  });

  return oddNumbers;
}

console.log(getOddNumbers());