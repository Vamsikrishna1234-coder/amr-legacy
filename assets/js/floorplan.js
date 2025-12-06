// SLIDER CONTROLS
function nextSlide(section) {
    const slider = document.getElementById(section + "-slider");
    slider.appendChild(slider.firstElementChild.cloneNode(true));
    slider.removeChild(slider.firstElementChild);
}

function prevSlide(section) {
    const slider = document.getElementById(section + "-slider");
    slider.insertBefore(slider.lastElementChild.cloneNode(true), slider.firstElementChild);
    slider.removeChild(slider.lastElementChild);
}


// ---------- IMAGE POPUP ----------
const fpModal = document.getElementById("fpModal");
const fpModalImg = document.getElementById("fpModalImg");
const fpClose = document.querySelector(".fp-close");

// open popup when image clicked
document.querySelectorAll(".fp-img").forEach(img => {
  img.addEventListener("click", function () {
    fpModal.style.display = "block";
    fpModalImg.src = this.src;
    document.body.style.overflow = "hidden";
  });
});

// close popup by X
fpClose.onclick = function () {
  fpModal.style.display = "none";
  document.body.style.overflow = "auto";
};

// close popup by clicking outside image
fpModal.onclick = function (e) {
  if (e.target === fpModal) {
    fpModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};


//gallery //
function nextGallery() {
  let carousel = bootstrap.Carousel.getInstance(document.getElementById('galleryCarousel'));
  carousel.next();
}

function prevGallery() {
  let carousel = bootstrap.Carousel.getInstance(document.getElementById('galleryCarousel'));
  carousel.prev();
}
