const menu = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const items = document.querySelectorAll(".reveal");
const buttons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
const modalCart = document.querySelector(".modalCart");
const cartBtn = document.querySelector(".cart-btn");

let cart = [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function renderCart() {
  modalCart.innerHTML = "";

  cart.forEach((item) => {
    const card = document.createElement("article");
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>R$ ${item.price.toFixed(2)}</p>
    `;
    modalCart.appendChild(card);
  });

  if (cart.length > 0) {
    const total = document.createElement("div");
    total.classList.add("cart-total");
    total.innerHTML = `
      <strong>Total</strong>
      <span>R$ ${calculateTotal().toFixed(2)}</span>
    `;
    modalCart.appendChild(total);
  }
}

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
  header.classList.toggle("menu-open");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    navbar.classList.remove("active");
    header.classList.remove("menu-open");
  });
});

items.forEach((item) => observer.observe(item));

cartBtn.addEventListener("click", (e) => {});

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = {
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
    };

    cart.push(item);

    saveCart();
    updateCartCount();
    renderCart();

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

cartBtn.addEventListener("click", () => {
  modalCart.classList.toggle("active");
});

loadCart();
updateCartCount();
renderCart();
