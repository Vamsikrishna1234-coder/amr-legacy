const counters = document.querySelectorAll('.count');
let milestoneStarted = false;

function startCounting() {
  counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let start = 0;
    let speed = target / 200; // adjust speed

    const updateCounter = () => {
      if (start < target) {
        start += speed;
        counter.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target; 
      }
    };
    updateCounter();
  });
}

function checkScroll() {
  const section = document.getElementById('milestones');
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !milestoneStarted) {
    milestoneStarted = true;
    startCounting();
  }
}

window.addEventListener('scroll', checkScroll);