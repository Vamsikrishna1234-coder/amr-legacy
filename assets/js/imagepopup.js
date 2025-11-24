(function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementById('modalCloseBtn');

    // Open modal when any .club-feature-img img is clicked
    document.querySelectorAll('.club-feature-img img').forEach(img => {
      img.addEventListener('click', function (e) {
        const fullSrc = this.dataset.full || this.src;
        modalImg.src = fullSrc;
        modalImg.alt = this.alt || 'Image preview';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        // prevent page scroll while modal open
        document.body.style.overflow = 'hidden';
        // focus the close button for accessibility
        closeBtn.focus();
      });
    });

    // Close helpers
    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
      document.body.style.overflow = '';
    }

    // close button
    closeBtn.addEventListener('click', closeModal);

    // click on backdrop (outside modal-content) closes
    modal.addEventListener('click', function (ev) {
      // if user clicked directly on the overlay (not the image or controls)
      if (ev.target === modal) closeModal();
    });

    // Esc key closes
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  })();