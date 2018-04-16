<?php
           
$to = 'anton@digitalfalcon.ae';
$subject  = 'Новая заявка';
$tel = $_POST['phone'];

$message  = '<b>Новая заявка на сайте</b><br><br>';
$message .= '<b>Телефон:</b> '.$_POST['phone']."\r\n";

if ($_POST['phone'] == '') {
    echo json_encode(array('result'=>'error','message'=>"Укажите номер!"));
    die;
}
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Pintastic <from@pintastic.by>\r\n";

if (mail($to, $subject, $message, $headers)) echo json_encode(array('result'=>'ok'));
    

?>
