const reedCheck = document.querySelector(".label-check input");
const reedDate = document.getElementById("reedDate");
reedCheck.addEventListener("change", function () {
  this.checked
    ? (reedDate.style.display = "grid")
    : (reedDate.style.display = "none");
});
