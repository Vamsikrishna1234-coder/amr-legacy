// script.js  (replace your current one with this)
const slides = document.querySelectorAll('.bg-slide');
let current = 0;
const stayDuration = 4200; // how long each image stays as background

function showNext() {
  slides.forEach(s => s.classList.remove('active'));

  // Reset positions instantly
  gsap.set('.from-top',   { y: "-110vh", rotation: 8, opacity: 0 });
  gsap.set('.from-right', { x: "110vw",  rotation: -10, opacity: 0 });
  gsap.set('.from-left',  { x: "-110vw", rotation: 10, opacity: 0 });

  const next = slides[current];

  // SAME fast, dramatic timing for ALL directions
  const commonTl = gsap.timeline({
    onComplete: () => {
      next.classList.add('active');
      current = (current + 1) % slides.length;
      setTimeout(showNext, stayDuration);
    }
  });

  if (next.classList.contains('from-top')) {
    commonTl.to(next, {
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.6,
      ease: "elastic.out(1.2, 0.35)"   // super bouncy & fast drop
    });

  } else if (next.classList.contains('from-right')) {
    commonTl.to(next, {
      x: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.25,                   // faster because it’s horizontal
      ease: "expo.out"                  // explosive speed
    });

  } else if (next.classList.contains('from-left')) {
    commonTl.to(next, {
      x: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.25,
      ease: "expo.out"
    });
  }
}

// Start
window.onload = () => setTimeout(showNext, 600);