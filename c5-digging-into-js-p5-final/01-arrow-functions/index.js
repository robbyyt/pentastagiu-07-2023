/**
 * 2 main ways to define functions
 */

function a() {
  console.log("hi");
}

const arrowA = () => {
  console.log("hi");
};

/**
 * Arrow vs regular function context
 */
var firstName = "Daniel";
var lastName = "Justin";

const human = {
  firstName: "Robert",
  lastName: "Tabacaru",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
  getFullNameV2: () => {
    return this.firstName + " " + this.lastName;
  },
};

console.log(human.getFullName());
console.log(human.getFullNameV2());
