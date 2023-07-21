function example() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 50;
    let y = 60;
    const z = 70;

    console.log(x);
    console.log(y);
    console.log(z);
  }

  console.log(x);
  console.log(y);
  console.log(z);
}

example();
