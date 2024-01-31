<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $message = $_POST["message"];
    
    // Set the recipient email address
    $to = "moizfaisal654@gmail.com";
    
    // Set the subject of the email
    $subject = "New Contact Form Submission from $name";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";
    
    // Set additional headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "success"; // Send a success response back to your React app
    } else {
        echo "error"; // Send an error response if the email couldn't be sent
        error_log("Email sending failed.");
    }
} else {
    echo "Invalid request"; // Send a response for invalid requests
}
?>
