let mButton = document.querySelector(".mobile-menu");
let menu = document.querySelector(".overlay");

mButton.addEventListener("click", function () {
  menu.style.display = "block";
});

let cButton = document.querySelector("#exit");

cButton.addEventListener("click", function () {
  menu.style.display = "none";
});
