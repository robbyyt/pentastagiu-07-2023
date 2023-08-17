function getRandomNumber() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation that resolves after a short delay
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
      // reject(new Error("Failed to get a random number."));
    }, 1000); // Wait for 1 second before resolving the Promise
  });
}

/**
 * Write a function that returns the sum of two random numbers generated using getRandomNumber().
 */

function getRandomNumberSum() {
  return getRandomNumber().then((number1) => {
    return getRandomNumber().then((number2) => number1 + number2);
  });
}

// getRandomNumberSum().then((number) => console.log(number));

async function getRandomNumberSumV2() {
  const number1 = await getRandomNumber();
  const number2 = await getRandomNumber();
  console.log(number1, number2);
  return number1 + number2;
}

async function getRandomNumberSumV3() {
  const numbers = await Promise.all([
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ]);

  return numbers.reduce((sum, current) => sum + current, 0);
}

async function getRandomNumberSumV4() {
  const results = await Promise.allSettled([
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    new Promise((resolve, reject) => reject("I failed")),
  ]);

  return results;
}

/**
 * IIFE - Immediately Executed function expression
 */
(async () => {
  const sum = await getRandomNumberSumV4();
  console.log(sum);
})();

/**
 * Promise methods
 */
