 const slides = document.querySelectorAll('.image-slide');
  const dots = document.querySelectorAll('.progress-dot');
  const slideNumber = document.querySelector('.slide-number');

  let currentIndex = 0;
  const slideInterval = 10000;
  let autoplayTimer;

  // Show slide with GSAP animation
  function revealSlide(index) {
    const isMobile = window.innerWidth < 768;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    const currentSlide = slides[index];
    currentSlide.classList.add('active');
    dots[index].classList.add('active');

    slideNumber.textContent = `0${index + 1}`;

    gsap.fromTo(
      currentSlide,
      { clipPath: 'circle(0% at 50% 50%)' },
      { clipPath: 'circle(100% at 50% 50%)', duration: 1.4, ease: 'expo.inOut' }
    );

    gsap.fromTo(slideNumber,
      { scale: 1.5, opacity: 0 },
      { scale: 1, opacity: 0.25, duration: 0.6, ease: 'back.out(1.7)' }
    );
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    revealSlide(currentIndex);
  }

  function goToSlide(index) {
    if (index === currentIndex) return;
    currentIndex = index;
    revealSlide(currentIndex);
    startAutoplay(); // reset proper timing
  }

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, slideInterval);
  }

  // Dot Click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      goToSlide(index);
    });
  });

  // Start when page loads
  window.addEventListener('load', () => {
    revealSlide(0);

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

    startAutoplay();
  });

  // Pause on hover
  document.querySelector('.hero-container').addEventListener('mouseenter', () => {
    clearInterval(autoplayTimer);
  });

  document.querySelector('.hero-container').addEventListener('mouseleave', () => {
    startAutoplay();
  });