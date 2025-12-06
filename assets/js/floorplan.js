/* ---------- SLIDER LOGIC (2 visible, move 1 at a time) ---------- */

const fpIndex = {
  east: 0,
  west: 0
};

function updateSlider(section) {
  const slider = document.getElementById(section + "-slider");
  if (!slider) return;
  slider.style.transform = `translateX(-${fpIndex[section] * 50}%)`;
}

function nextSlide(section) {
  const slider = document.getElementById(section + "-slider");
  if (!slider) return;

  const total = slider.children.length;
  fpIndex[section]++;

  // last valid index = total - 2 (because 2 images visible)
  if (fpIndex[section] > total - 2) {
    fpIndex[section] = 0;
  }

  updateSlider(section);
}

function prevSlide(section) {
  const slider = document.getElementById(section + "-slider");
  if (!slider) return;

  const total = slider.children.length;
  fpIndex[section]--;

  if (fpIndex[section] < 0) {
    fpIndex[section] = total - 2;
  }

  updateSlider(section);
}

/* ---------- IMAGE POPUP ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const fpModal = document.getElementById("fpModal");
  const fpModalImg = document.getElementById("fpModalImg");
  const fpClose = document.querySelector(".fp-close");

  if (!fpModal || !fpModalImg || !fpClose) return;

  // open popup
  document.querySelectorAll(".fp-img").forEach(img => {
    img.addEventListener("click", () => {
      fpModal.style.display = "flex";
      fpModalImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  // close by X
  fpClose.addEventListener("click", () => {
    fpModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // close by clicking outside
  fpModal.addEventListener("click", (e) => {
    if (e.target === fpModal) {
      fpModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

//gallery //
function nextGallery() {
  let carousel = bootstrap.Carousel.getInstance(document.getElementById('galleryCarousel'));
  carousel.next();
}

function prevGallery() {
  let carousel = bootstrap.Carousel.getInstance(document.getElementById('galleryCarousel'));
  carousel.prev();
}
