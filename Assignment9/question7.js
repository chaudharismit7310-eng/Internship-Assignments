// Area of rectangle

function rectangleArea(rectangle) {
  return rectangle.width * rectangle.height;
}

let rectangle = {
  width: 10,
  height: 5
};

console.log("Area =", rectangleArea(rectangle));