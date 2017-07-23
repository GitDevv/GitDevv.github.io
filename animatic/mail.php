<?php
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $text = htmlspecialchars(trim($_POST['text']));

    $message = "Имя: $name  \nE-mail: $email \nСообщение: $text";

    $to = 'v.belza008@gmail.com';
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n"; 

    $result = mail($to, " $email", $message, $headers);
?>

 