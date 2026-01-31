const menu = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  header.classList.toggle("menu-open");
});
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

items.forEach((item) => observer.observe(item));
