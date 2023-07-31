/**
 * let, const, var
 * const vs let, var
 * - const doesn't let us reassign variables
 * let vs var?
 */

/**
 * var performs hoisting
 * - declarations are moved to the top of the file
 *  - function declarations are also hoisted
 * - var does not have block scope
 */

if (true) {
  var a = 2;
  let b = 3;
}

console.log(a); // outputs 2;
// console.log(b); // ReferenceError;

abc();
function abc() {
  console.log("abc");
}

/**
 * An edge case, are assignments move to the top as well?
 * No.
 */
console.log(c);
var c = 2;
