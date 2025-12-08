
// ==============================
//  FEATURE IMAGES MODAL
// ==============================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

// Open on clicking any .club-feature-img image
document.querySelectorAll(".club-feature-img img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.dataset.full || img.src;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

// Close on button
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
  modalImg.src = "";
  document.body.style.overflow = "";
});

// Close on clicking outside
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }
});

// ESC key closes
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    modal.classList.remove("open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }
});


// ==============================
//  CLUBHOUSE MAIN IMAGE MODAL
// ==============================
const clubhouseImage = document.getElementById("openClubhouseImage");
const clubhousePopup = document.getElementById("clubhousePopup");
const clubhouseClose = document.getElementById("closePopup");

// Open
if (clubhouseImage) {
  clubhouseImage.addEventListener("click", () => {
    clubhousePopup.classList.add("open");
    document.body.style.overflow = "hidden";
  });
}

// Close
if (clubhouseClose) {
  clubhouseClose.addEventListener("click", () => {
    clubhousePopup.classList.remove("open");
    document.body.style.overflow = "";
  });
}

// Close on clicking outside
clubhousePopup?.addEventListener("click", e => {
  if (e.target === clubhousePopup) {
    clubhousePopup.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// ESC key closes clubhouse
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && clubhousePopup?.classList.contains("open")) {
    clubhousePopup.classList.remove("open");
    document.body.style.overflow = "";
  }
});

