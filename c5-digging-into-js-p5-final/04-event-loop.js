setTimeout(function a() {
  console.log("a");
}, 500);

Promise.resolve().then(function b() {
  console.log("d");
});

Promise.resolve().then(function b() {
  console.log("b");
});

new Promise((resolve) => setTimeout(() => resolve(console.log("c")), 0));
