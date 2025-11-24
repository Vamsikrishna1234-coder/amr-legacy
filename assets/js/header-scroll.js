const header = document.getElementById("mainHeader");
const logo = document.querySelector(".logo-img");
const navMenu = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
    logo.classList.add("small-logo");
    navMenu.classList.add("compressed");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("small-logo");
    navMenu.classList.remove("compressed");
  }
});
