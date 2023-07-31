const a = {};
const b = {};

/**
 * Non-primitive values are compared by reference
 */
console.log(a == b);

/**
 * Objects and copies
 */
const c = { foo: "baz" };
let d = c;

d.foo = "bar";
d.new = "new";

console.log(c);

function cloneObject(input) {
  const stringifiedInput = JSON.stringify(input);
  console.log("Stringified", stringifiedInput);
  return JSON.parse(stringifiedInput);
}

c.fun = function () {
  console.log("fun");
};

const clone = cloneObject(c);
clone.foo = "NEW";

console.log("Clone", clone);

c["obj"] = { propC: 1 };

const clone2 = { ...c };
console.log("Clone2", clone2);

clone2.foo = "clone2Foo";
clone2.obj.propC = 2;
console.log("C", c);
console.log("Clone 2", clone2);

/**
 * Use structured clone when no functions are present.
 * Make sure not to have nested objects.
 */
