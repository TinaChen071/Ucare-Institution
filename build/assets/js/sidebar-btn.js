const btn = document.getElementById("btn__inner");
const icon = document.getElementById("btn__inner__icon");
btn.addEventListener("click", function() {
  if (icon.getAttribute("fill") === "current") {
    icon.setAttribute("fill", "blue");
  } else {
    icon.setAttribute("fill", "red");
  }
});
