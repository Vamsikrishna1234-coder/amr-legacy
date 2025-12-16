document.addEventListener("DOMContentLoaded", function () {

  function openBrochureForm() {
    document.getElementById("brochureFormPopup").style.display = "block";
  }

  function closeBrochureForm() {
    document.getElementById("brochureFormPopup").style.display = "none";
  }

  window.openBrochureForm = openBrochureForm;
  window.closeBrochureForm = closeBrochureForm;

  document.getElementById("brochureForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("email.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(response => {

      if (response.trim() === "success") {

        // DOWNLOAD AFTER EMAIL SUCCESS
        const a = document.createElement("a");
        a.href = "assets/images/AMR_Brochure_v2.pdf";
        a.download = "AMR_Brochure.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        closeBrochureForm();
        this.reset();

      } else {
        alert("Mail failed. Please try again.");
      }
    })
    .catch(() => {
      alert("Server error. Please try later.");
    });
  });

});
