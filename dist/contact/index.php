<?php

$to = 'christophedivina@gmail.com';
$subject = 'Message from Website';
$message = $_POST['from']
$from = $_POST['from'];

// Sending email
return mail($to, $subject, $message);

?>
