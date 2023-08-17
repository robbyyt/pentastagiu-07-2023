// class Human {
//   constructor(alive) {
//     this.alive = true;
//   }
// }

// class Employee extends Human {
//   constructor(alive, works) {
//     super(alive);
//     this.works = works;
//   }
// }

// const emp = new Employee(true, true);

// console.log(employee);

const human = {
  alive: true,
  greet() {
    console.log("Hi, I am a human!");
  },
};

const employee = {
  works: true,
  greet() {
    console.log("Hi, I am an employee");
  },
  __proto__: human,
};

for (const key of Object.keys(employee)) {
  console.log(key);
}

for (const key in employee) {
  console.log(key);
}

/**
 * Some exercises:
 * What does delete do?
 */

delete employee.greet;

employee.greet();

delete employee.greet;

employee.greet();

/**
 * What is shared
 */

const snake = {
  stomach: [],

  hunt(mouse) {
    this.stomach = [mouse];
  },
};

const anaconda = {
  __proto__: snake,
};

const boa = {
  __proto__: snake,
};

anaconda.hunt("mouse 1");
boa.hunt("mouse 2");

class Snake {
  stomach;

  constructor() {
    this.stomach = [];
  }

  hunt(mouse) {
    this.stomach.push(mouse);
  }
}

class Anaconda extends Snake {
  constructor() {
    super();
  }
}

class Boa extends Snake {
  constructor() {
    super();
  }
}

const a = new Anaconda();

const b = new Boa();

a.hunt("mouse 1");

b.hunt("mouse 2");

console.log("Class based inheritance");
console.log(a.stomach);
console.log(b.stomach);

console.log(typeof a);
console.log("Is a Anaconda? ", a instanceof Anaconda);
console.log("Is a Snake? ", a instanceof Snake);
console.log(typeof Anaconda);
