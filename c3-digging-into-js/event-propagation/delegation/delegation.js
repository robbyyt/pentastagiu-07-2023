const taskList = document.getElementById("taskList");

// With delegation, we can add an event listener at parent level
// which will capture and handle the event from its children
taskList.addEventListener("click", function (event) {
  if (event.target.id === "delegation") {
    console.log(`Task "${event.target.textContent}" clicked`);
  }
});
