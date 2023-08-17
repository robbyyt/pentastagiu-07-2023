/**
 * Implement a timer.
 *
 */
const func = () => console.log("Hello!");
const intervalId = setInterval(func, 1500);

setTimeout(() => clearInterval(intervalId), 3000);

/**
 * Var vs let, interval version.
 */
for (let i1 = 0; i1 < 5; i1++) {
  setTimeout(() => console.log(i1), 500 * (i1 + 1));
}
/**
 * A. 0,1,2,3,4
 * B. 1,2,3,4,5
 * C. 4,4,4,4,4
 * D. 5,5,5,5,5
 */

// const MAX_ITER = 1_000_000;
// let current_iter = 0;
// while (current_iter < MAX_ITER) {
//   console.log(current_iter);
//   current_iter++;
// }
