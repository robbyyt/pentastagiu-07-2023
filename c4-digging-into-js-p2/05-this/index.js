/**
 * 4 rules for "this".
 */

/**
 * Case 1: global this. (window)
 */
var a = 2;

function foo() {
  console.log(this.a);
}

foo(); // logs 2 - unless in strict mode

/**
 * Case 2: Implicit binding.
 */

const obj = {
  a: 3,
  foo: foo,
  f2() {
    console.log("Called f2: ", this.a);
  },
};

obj.foo(); // will log 3 because this will become obj
obj.f2(); // wil log 3 because this will equal obj

/**
 * A function is never really "owned" by an object
 */

const globalF2 = obj.f2;

globalF2();

/**
 *  Case 3: Explicit binding
 */
const obj2 = { a: 99 };
const boundFoo = foo.bind(obj);

boundFoo.call(obj2);

/**
 * Case 4: "new binding"
 */

function Human(name) {
  this.name = name;
}

const robb = new Human("Robert");

console.log(robb.name);
