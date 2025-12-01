document.addEventListener("DOMContentLoaded", function () {

    const chatbox = document.getElementById("chatbox");
    const chatbotToggle = document.getElementById("chatbotToggle");
    const closeChat = document.getElementById("closeChat");

    // --- Open chatbot automatically when page loads ---
    chatbox.style.display = "flex";

    // --- Button controls ---
    chatbotToggle.onclick = () => chatbox.style.display = "flex";
    closeChat.onclick = () => chatbox.style.display = "none";

    // FORM HANDLING
    window.openSiteVisitForm = function () {
        document.getElementById("chatOptions").style.display = "none";
        document.getElementById("siteVisitForm").style.display = "flex";
    }

    window.openEnquiryForm = function () {
        document.getElementById("chatOptions").style.display = "none";
        document.getElementById("enquiryForm").style.display = "flex";
    }

    window.backToOptions = function () {
        document.getElementById("siteVisitForm").style.display = "none";
        document.getElementById("enquiryForm").style.display = "none";
        document.getElementById("chatOptions").style.display = "block";
    }

    // FAQ
    window.showAnswer = function (id) {
        const ans = document.getElementById(id);
        ans.style.display = ans.style.display === "block" ? "none" : "block";
    }

    // SITE VISIT SUBMISSION
    window.submitSiteVisit = function () {
        let name = document.getElementById("svName").value;
        let phone = document.getElementById("svPhone").value;

        if (name === "" || phone === "") {
            alert("Name and Phone Number are required");
            return;
        }
        document.getElementById("svSuccess").innerText = "Your site visit request is submitted!";
    }

    // ENQUIRY SUBMISSION
    window.submitEnquiry = function () {
        let name = document.getElementById("enqName").value;
        let phone = document.getElementById("enqPhone").value;

        if (name === "" || phone === "") {
            alert("Name and Phone Number are required");
            return;
        }
        document.getElementById("enqSuccess").innerText = "Your enquiry has been submitted!";
    }

});
