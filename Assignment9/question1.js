// let, const and var

function checkVariables() {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("var =", a);
  console.log("let =", b);
  console.log("const =", c);

  /*
    var   -> function scoped
    let   -> block scoped
    const -> block scoped and value cannot be changed
  */
}

checkVariables();