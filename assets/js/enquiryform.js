function submitEnquiry() {
    let name = document.getElementById("enqName").value;
    let phone = document.getElementById("enqPhone").value;
    let email = document.getElementById("enqEmail").value;
    let message = document.getElementById("enqMsg").value;

    let formData = new FormData();
    formData.append("form_type", "Enquiry Form");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("date", "Not Provided");
    formData.append("message", message);

    fetch("sendmail.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(response => {
        if (response.trim() === "success") {
            document.getElementById("enqSuccess").innerText = "Submitted successfully!";
        } else {
            document.getElementById("enqSuccess").innerText = "Error sending email.";
        }
    });
}
