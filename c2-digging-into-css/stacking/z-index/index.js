var dialog = document.getElementById("dialog1");
var btn = document.getElementById("button");
var btn1 = document.getElementById("button1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  dialog.style.display = "block";
};
btn1.onclick = function () {
  dialog.style.display = "block";
};
span.onclick = function () {
  dialog.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == dialog) {
    dialog.style.display = "none";
  }
};
