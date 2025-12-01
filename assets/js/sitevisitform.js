function submitSiteVisit() {
    let name = document.getElementById("svName").value;
    let phone = document.getElementById("svPhone").value;
    let email = document.getElementById("svEmail").value;
    let date = document.getElementById("svDate").value;
    let message = document.getElementById("svMsg").value;

    let formData = new FormData();
    formData.append("form_type", "Book Site Visit");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("date", date);
    formData.append("message", message);

    fetch("sendmail.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(response => {
        if (response.trim() === "success") {
            document.getElementById("svSuccess").innerText = "Submitted successfully!";
        } else {
            document.getElementById("svSuccess").innerText = "Error sending email.";
        }
    });
}
