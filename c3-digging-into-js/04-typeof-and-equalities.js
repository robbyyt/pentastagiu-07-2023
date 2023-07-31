const a = Number("ss322");

console.log(a);

console.log("NaN + a number always equals NaN", a + 2);
console.log("NaN + string", a + "2");

console.log("NaN", typeof a);
console.log("NaN is not equal to itself...", NaN === NaN);

// Verifying that number is a NaN:

if (typeof a === "number" && a !== a) {
  console.log("I am NaN!");
}
// Or simpler
console.log(Number.isNaN(a));
