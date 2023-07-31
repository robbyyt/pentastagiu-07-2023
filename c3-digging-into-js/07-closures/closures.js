const hi = "Hello";
// Basic Example
// functions as first-class objects
console.log("Basic Example:");
function outerFunction() {
  console.log(hi);
  const outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();

// Scope Chain
var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

const returnedBar = foo();
y = 11;
console.log("returned bar", returnedBar());

// Closures with Function Parameters
console.log("Closure with Function Parameters:");
function greet(message) {
  return function (name) {
    console.log(`${message}, ${name}!`);
  };
}

const greetHello = greet("Hello");
const greetHi = greet("Hi");

greetHello("Alice");
greetHi("Bob");

// Closures with Asynchronous Operations:
console.log("Closures with Asynchronous Operations:");
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

setTimeout(increment, 1000);
setTimeout(increment, 2000);
setTimeout(increment, 3000);
