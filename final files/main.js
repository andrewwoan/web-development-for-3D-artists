// Showing and hiding mobile menu 
const menuIcon = document.querySelector(".menu-svg");
const mobileMenu = document.querySelector(".mobile-nav-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


// Removing mobile menu during resize
const mobileQuery = window.matchMedia("(max-width: 900px)");

mobileQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    mobileMenu.classList.remove("active");
  }
});


// Showing and hiding the entire nav header on scroll
const navHeader = document.querySelector(".nav-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (mobileMenu.classList.contains("active")) {
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY > lastScrollY) {
    navHeader.classList.add("hidden");
  } else {
    navHeader.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});