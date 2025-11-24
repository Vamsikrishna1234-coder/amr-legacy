let current = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const total = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

/* Auto change every 3 seconds */
let auto = setInterval(nextSlide, 4000);

/* Buttons */
document.querySelector(".next").onclick = () => {
  nextSlide();
  resetAuto();
};

document.querySelector(".prev").onclick = () => {
  prevSlide();
  resetAuto();
};

/* Dots click */
dots.forEach((dot, index) => {
  dot.onclick = () => {
    current = index;
    showSlide(current);
    resetAuto();
  };
});

/* Reset timer on interaction */
function resetAuto() {
  clearInterval(auto);
  auto = setInterval(nextSlide, 3000);
}
