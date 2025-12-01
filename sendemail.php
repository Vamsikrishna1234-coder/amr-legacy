<?php

$admin_email = "yourmail@gmail.com"; // CHANGE THIS

$form_type = $_POST['form_type'];
$name      = $_POST['name'];
$phone     = $_POST['phone'];
$email     = $_POST['email'];
$message   = $_POST['message'] ?? "";
$date      = $_POST['date'] ?? "Not Provided";

$subject = "New Submission: $form_type";

$body = "
Form Type: $form_type

Name: $name
Phone: $phone
Email: $email
Date: $date

Message:
$message

Submitted At: " . date("Y-m-d H:i:s") . "
";

$headers  = "From: Website Form <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($admin_email, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
