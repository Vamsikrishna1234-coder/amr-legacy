let current = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const total = slides.length;

// Show specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Next & Previous
function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

// Auto-slide every 10 seconds
let autoSlide = setInterval(nextSlide, 10000);  // 10 seconds

// Reset timer when user interacts
function resetTimer() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 10000);  // Restart 10-second timer
}

// Button controls
document.getElementById("nextBtn")?.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

document.getElementById("prevBtn")?.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    showSlide(current);
    resetTimer();
  });
});

// Optional: Pause on hover (nice UX)
const carousel = document.querySelector(".carousel");
if (carousel) {
  carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carousel.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, 10000));
}