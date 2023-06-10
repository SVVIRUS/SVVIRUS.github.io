<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$query = $_POST['Query'];
$message = $_POST['message'];

$email_from = 'support@frpgeeks.com';

$email_query = 'New Query';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Query: $query.\n".
                "User Message: $message.\n";

$to = 'support@frpgeeks.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";


mail($to,$email_query,$email_body,$headers);

header("Location: Contact.html");
?>