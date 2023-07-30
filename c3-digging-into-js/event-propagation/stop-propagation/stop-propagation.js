const button = document.getElementById("button");
const inner = document.getElementById("inner");
const outer = document.getElementById("outer");

button.addEventListener("click", function (event) {
  console.log("Button Clicked");
  // By using stopPropagation we can stop the 'bubbling' efect
  event.stopPropagation();
});

inner.addEventListener("click", function (event) {
  console.log("Inner Div Clicked");
});

outer.addEventListener("click", function (event) {
  console.log("Outer Div Clicked");
});
