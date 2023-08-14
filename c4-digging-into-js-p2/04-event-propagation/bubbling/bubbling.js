const button = document.getElementById("button");
const inner = document.getElementById("inner");
const outer = document.getElementById("outer");

// With bubbling, the events 'travel up' starting from  the element where the action happened first
button.addEventListener("click", function (event) {
  console.log("Button Clicked");
});

inner.addEventListener("click", function (event) {
  console.log("Inner Div Clicked");
});

outer.addEventListener("click", function (event) {
  console.log("Outer Div Clicked");
});
