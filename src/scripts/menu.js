const menu = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  header.classList.toggle("menu-open");
});
