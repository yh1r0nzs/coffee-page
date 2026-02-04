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

const buttons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let cart = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = {
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
    };

    cart.push(item);
    cartCount.textContent = cart.length;

    const originalText = btn.textContent;

    btn.textContent = "✓ Adicionado";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1200);
    btn.blur();
  });
});
