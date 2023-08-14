/**
 * Array methods, a list
 * - push() to add an item at the end of an array
 * - pop() to remove the item at the end of an array
 *  Used for stacks or LIFO type.
 * - shift() - extracts an item from the beginning
 * - unshift() - adds an item at the beginning of an array
 *  Used for FIFO.
 *
 * Most popular utilities:
 * - map() - used to "map" each element of an array to another value.
 * - filter() - used to exclude elements based on a criteria, does not modify the original array
 * - reduce() - "compress" an array into a single result value (usually)
 *
 * And many more...
 */

const initialArray = ["apple", "banana", "pear"];

/**
 * Given an initial array of fruits let's construct one like this:
 * [{"id": 1, "name": "apple"}, {"id": 2, name: "banana"}, ...]
 */
const fruitObjects = initialArray.map((fruit, index) => {
  return {
    id: index + 1,
    name: fruit,
  };
});

/**
 * Filter example:
 * Eliminate bananas from the fruits array
 */
const nonBananaFruits = fruitObjects.filter(function (fruit) {
  return fruit.name !== "banana";
});

/**
 * Reduce example: sum of numbers in an array.
 */
const numbers = [0, 1, 2, 6, 9];

const sum = numbers.reduce(
  (previousValue, currentValue) => {
    return { sum: previousValue.sum + currentValue };
  },
  { sum: 0 }
);

/**
 * Array methods challenge:
 * Starting from fruitObjects, construct an object that looks like this:
 * {
 *  1: 'apple',
 *  2: 'banana',
 *  3: 'pear'
 * }
 */

const fruitMap = fruitObjects.reduce((previousElement, currentArrayElement) => {
  previousElement[currentArrayElement.id] = currentArrayElement.name;
  return previousElement;
}, {});
