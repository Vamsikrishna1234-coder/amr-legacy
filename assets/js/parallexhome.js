
document.addEventListener("DOMContentLoaded", () => {

  let images = [
    "assets/images/amr%20hero3.jpg",  // Image 1
    "assets/images/amr%20hero1.jpg"   // Image 2
  ];

  let section = document.querySelector(".parallax-section");
  let index = 0;

  // Set initial image
  section.style.backgroundImage = `url(${images[index]})`;

  window.addEventListener("scroll", () => {

    let rect = section.getBoundingClientRect();

    // Check if section is visible
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {

      // Scroll percentage inside parallax
      let scrollPercent = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);

      /* --------------------------------------------
         DOWN SCROLL → Switch Image 1 → Image 2
      -------------------------------------------- */
      if (scrollPercent > 0.35 && index === 0) {
        index = 1;
        section.style.backgroundImage = `url(${images[1]})`;
      }

      /* --------------------------------------------
         UP SCROLL → Switch Image 2 → Image 1
      -------------------------------------------- */
      if (scrollPercent < 0.20 && index === 1) {
        index = 0;
        section.style.backgroundImage = `url(${images[0]})`;
      }
    }
  });

});

