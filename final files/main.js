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
const hideThreshold = 100;

let lastScrollY = window.scrollY;
let directionStartY = window.scrollY;
let scrollDirection = null; // "down" or "up"

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (mobileMenu.classList.contains("active")) {
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY <= 0) {
    navHeader.classList.remove("hidden");
    lastScrollY = currentScrollY;
    directionStartY = currentScrollY;
    scrollDirection = null;
    return;
  }

  const delta = currentScrollY - lastScrollY;

  if (delta > 0) {
    if (scrollDirection !== "down") {
      scrollDirection = "down";
      directionStartY = lastScrollY;
    }

    if (currentScrollY - directionStartY >= hideThreshold) {
      navHeader.classList.add("hidden");
    }
  } else if (delta < 0) {
    if (scrollDirection !== "up") {
      scrollDirection = "up";
      directionStartY = lastScrollY;
    }

    navHeader.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});