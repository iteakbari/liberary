const reedCheck = document.querySelector(".label-check input");
const reedDate = document.getElementById("reedDate");
const lbls = [...document.querySelectorAll(".input-label")];
const form = document.getElementById("submitForm");

reedCheck.addEventListener("change", function () {
  this.checked
    ? (reedDate.style.display = "grid")
    : (reedDate.style.display = "none");
});
