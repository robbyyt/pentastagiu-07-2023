/**
 * Set
 */
const set = new Set([1, 2, 3, 2, 4]);

console.log(set.add(5));

console.log(set.has(99));

const array = Array.from(set);
console.log(array);

/**
 * Maps
 */
const map = new Map();
map.set("1", 1);

console.log(map);
