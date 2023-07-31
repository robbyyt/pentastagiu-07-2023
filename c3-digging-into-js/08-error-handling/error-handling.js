// try/catch block
/*
try{
    //...
} catch(e){
    //...
}
*/

// The throw Statement
function validateNumber(num) {
  try {
    if (typeof num !== "number") {
      throw new TypeError("Input must be a number.");
    }
    if (num <= 0) {
      throw new RangeError("Input must be a positive number.");
    }
    return Math.sqrt(num);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log("\nThe throw statement:");
console.log(validateNumber(25));
validateNumber("Not a number");
validateNumber(-10);

// The Finally statement
function divideNumbersFinally(a, b) {
  try {
    const result = a / b;
    console.log("Result of division:", result);

    if (isNaN(result)) {
      throw new Error("Result is not a number.");
    }
    console.log("Division was successful.");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("This code will always run, regardless of errors.");
  }
}

console.log("\nThe finally statement:");
divideNumbersFinally(10, 2);
divideNumbersFinally(10, "blabla");

// Nesting try blocks
function divideNumbers(a, b) {
  try {
    const result = a / b;
    console.log("Result of division:", result);

    try {
      if (isNaN(result)) {
        throw new Error("Result is not a number.");
      }
      console.log("Division was successful.");
    } catch (innerError) {
      console.log("Inner Error:", innerError.message);
    }
  } catch (outerError) {
    console.log("Outer Error:", outerError.message);
  }
}

console.log("\nNesting try blocks:");
divideNumbers(10, 2);
divideNumbers(10, 0);
