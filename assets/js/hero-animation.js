// ================= SELECTORS =================
const heroContainer = document.querySelector('.hero-container');
const progressContainer = document.querySelector('.progress-container');
const slideNumber = document.querySelector('.slide-number');

let slides = [];
let dots = [];

let currentIndex = 0;
const slideInterval = 10000;
let autoplayTimer;

// 🔒 DEVICE LOCK (VERY IMPORTANT)
const isMobile = window.innerWidth < 768;

// ================= SETUP SLIDES (RUN ONLY ONCE) =================
function setupSlidesOnce() {
  slides = Array.from(document.querySelectorAll('.image-slide'));
  dots = Array.from(document.querySelectorAll('.progress-dot'));

  // 👉 MOBILE: move first slide + dot to last
  if (isMobile) {
    slides.push(slides.shift());
    dots.push(dots.shift());
  }

  // Apply order to DOM
  slides.forEach(slide => heroContainer.appendChild(slide));
  dots.forEach((dot, index) => {
    dot.setAttribute('data-slide', index);
    progressContainer.appendChild(dot);
  });

  // Bind dot clicks
  dots.forEach(dot => {
    dot.onclick = () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      goToSlide(index);
    };
  });
}

// ================= SLIDE ANIMATION =================
function revealSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  slideNumber.textContent = `0${index + 1}`;

  gsap.fromTo(
    slides[index],
    { clipPath: 'circle(0% at 50% 50%)' },
    { clipPath: 'circle(100% at 50% 50%)', duration: 1.4, ease: 'expo.inOut' }
  );

  gsap.fromTo(
    slideNumber,
    { scale: 1.5, opacity: 0 },
    { scale: 1, opacity: 0.25, duration: 0.6, ease: 'back.out(1.7)' }
  );
}

// ================= NAVIGATION =================
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  revealSlide(currentIndex);
}

function goToSlide(index) {
  if (index === currentIndex) return;
  currentIndex = index;
  revealSlide(currentIndex);
  startAutoplay();
}

// ================= AUTOPLAY =================
function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, slideInterval);
}

// ================= INIT (NO DOUBLE RENDER) =================
window.addEventListener('DOMContentLoaded', () => {
  setupSlidesOnce();      // 🔥 runs before first paint
  revealSlide(0);         // 🔥 correct first image only
  startAutoplay();

  gsap.from('.progress-container', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3
  });

  gsap.from('.slide-number', {
    opacity: 0,
    scale: 2,
    duration: 0.8,
    delay: 0.2
  });
});

// ================= HOVER PAUSE =================
heroContainer.addEventListener('mouseenter', () => {
  clearInterval(autoplayTimer);
});

heroContainer.addEventListener('mouseleave', () => {
  startAutoplay();
});
