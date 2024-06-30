<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];



$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = '300624test@gmail.com'; 
$mail->Password = 'test12345test';
$mail->SMTPSecure = 'ssl';
$mail->Port = 587; 

$mail->setFrom('test3006@gmail.com'); 
$mail->addAddress('5c1jadwz8i@mxscout.com');

$mail->isHTML(true);                                  

$mail->Subject = 'Заявка на вебинар';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
