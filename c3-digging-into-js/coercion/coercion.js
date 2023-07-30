// String conversion
// Coercing a number to a string using String() function
console.log("Coercing a number to a string - using String() function:")
console.log("String(123): ", String(123))
console.log("String(-12.3): ", String(-12.3))
console.log("String(null): ", String(null))
console.log("String(undefined): ", String(undefined))
console.log("String(true): ", String(true))
console.log("String(false): ", String(false))

// Coercing a number to a string using binary + operator
const number = 42;
const string = "8" + number;
console.log("Coercing a number to a string using binary + operator: ", string);


// Number conversion
// Number conversion - using Number() function
console.log("Number conversion using Number() function:")
console.log("Number(null): ", Number(null))
console.log("Number(undefined): ", Number(undefined))
console.log("Number(true): ", Number(true))
console.log("Number(false): ", Number(false))
console.log("Number(\" 12 \")", Number(" 12 "))
console.log("Number(\"-12.34\"): ", Number("-12.34"))
console.log("Number(\"\n\"): ", Number("\n"))
console.log("Number(\" 12s \"): ", Number(" 12s "))
console.log("Number(123): ", Number(123))

// Coercing a string to a number using arithmetic operators
console.log("Coercing a string to a number using arithmetic operators:")
console.log('10 - \'5\': ', 10 - '5');
console.log('10 * \'5\': ', 10 * '5');
console.log('10 / \'5\': ', 10 / '5');
console.log('10 % \'5\': ', 10 % '5');


// Boolean conversion using Boolean() function
console.log("Coercing a value to a Boolean using Boolean() function:")

if ("") {
    console.log("This will not be printed.");
} else {
    console.log("An empty string is falsy.");
}  

console.log("Boolean(''): ", Boolean(''))         
console.log("Boolean(0): ", Boolean(0))            
console.log("Boolean(-0): ", Boolean(-0))
console.log("Boolean(NaN): ", Boolean(NaN))
console.log("Boolean(null)", Boolean(null))
console.log("Boolean(undefined): ", Boolean(undefined))
console.log("Boolean(false): ", Boolean(false))


// Coercing with loose equality (==)
console.log("Coercing with loose equality (==):")
console.log("1 == \"1\": ", 1 == "1"); 
console.log("true == 1: ", true == 1); 
console.log("null == undefined: ", null == undefined); 


// Coercing with strict equality (===)
console.log("Coercing with strict equality (===):")
console.log("1 == \"1\": ", 1 === "1"); 
console.log("true === 1: ", true === 1); 
console.log("null === undefined: ", null === undefined); 