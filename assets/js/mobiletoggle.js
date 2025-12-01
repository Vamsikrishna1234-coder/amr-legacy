 const mobileMenu = document.getElementById("mobileMenu");
  const mobileToggle = document.querySelector(".d-lg-none"); 
  const mobileClose = document.querySelector(".mobile-close");

  // OPEN MENU
  mobileToggle.addEventListener("click", () => {
    mobileMenu.style.right = "0";
  });

  // CLOSE MENU
  mobileClose.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
  });