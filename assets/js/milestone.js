document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.count');

  function animateCounters() {
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let current = 0;
      let speed = target / 120; // speed adjust — higher is slower

      function update() {
        if (current < target) {
          current += speed;
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }

      update();
    });
  }

  function resetCounters() {
    counters.forEach(counter => counter.textContent = "0");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          resetCounters();
          animateCounters();
        }
      });
    },
    { threshold: 0.1 } // important fix
  );

  observer.observe(document.getElementById("milestones"));
});
