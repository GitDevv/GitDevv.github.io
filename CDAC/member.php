<?php
    $name = htmlspecialchars(trim($_POST['name']));
    $namel = htmlspecialchars(trim($_POST['namel']));
    $company = htmlspecialchars(trim($_POST['company']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));



    $message = " ***";

    $to = 'v.belza008@gmail.com';
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n"; 

    $result = mail($to, "Заказ c Orion-auto: $phone", $message, $headers);
?>

 
 