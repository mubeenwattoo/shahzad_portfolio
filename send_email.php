<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST['send'])){
  $name = htmlentities($_POST['name']);
  $email = htmlentities($_POST['email']);
  $message = htmlentities($_POST['message']);

  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'shahzadyounas749@gmail.com';
  $mail->Password = 'ukyk vwmk fros dotk';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->isHTML(true);
  $mail->setFrom($email, $name);
  $mail->addAddress('shahzadyounas749@gmail.com');
  $mail->Subject = ("$email ($subject)");
  $mail->Body = $message;
  $mail->send();

  header("Location: ./index.html");
}
?>
