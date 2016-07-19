<?php 
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$receiver = "contato@cosmoslab.com.br";
$subject = "Mensagem Cosmos Lab";

$body = "Mensagem enviada por um visitante: <br>";
$body .= "Nome do Visitante: ".$name."<br>";
$body .= "E-Mail do Visitante: ".$mail."<br>";
$body .= "Mensagem Enviada: ".$message."<br>";

require_once("phpmailer/class.phpmailer.php");
require_once("phpmailer/class.smtp.php");

$sender = "contato@cosmoslab.com.br";
$senderName = $name;

//define('GUSER', 'aulaphpucs@gmail.com');	// <-- Insira aqui o seu GMail
define('GPWD', 'r3Yy9I0r'); // <-- Insira aqui a senha do seu GMail

function smtpmailer($receiver, $sender, $senderName, $subject, $body) {
    global $error;
    $mail = new PHPMailer();
    $mail->Mailer = "smtp"; // Define o método de envio
    $mail->IsHTML(true); // Define que a mensagem poderá ter formatação HTML
    $mail->CharSet = "utf-8"; // Define que a codificação do conteúdo da mensagem será utf-8
    // $mail->SMTPSecure = "tls";// Define que os emails enviadas utilizarão SMTP Seguro tls
    $mail->Host = "smtpout.secureserver.net"; // Define que o Host que enviará a mensagem
    $mail->Port = "80"; //Define a porta utilizada pelo Gmail para o envio autenticado
    $mail->SMTPAuth = "true"; // Deine que a mensagem utiliza método de envio autenticado
    $mail->Username = $sender; // Define o usuário do gmail autenticado responsável pelo envio
    $mail->Password = "r3Yy9I0r"; // Define a senha deste usuário citado acima

    $mail->From = $sender; // Defina o email e o nome que aparecerá como remetente no cabeçalho
    $mail->FromName = $senderName;

    $mail->AddAddress($receiver); // Define o destinatário que receberá a mensagem

    $mail->Subject = $subject; // Assunto da mensagem
    $mail->Body = $body; // Toda a estrutura HTML e corpo da mensagem

    if (!$mail->Send()) {
        echo "Erro de envio: ".$mail->ErrorInfo;
        echo $_POST;
        return false;
    } else {
        echo "Mensagem enviada com sucesso!";
        return true;
    }
}

if (smtpmailer($receiver, $sender, $senderName, $subject, $body)) {
    echo "Obrigado por nos enviar uma sugestão!"."<br />";
}
if (!empty($error)) {
    echo $error;
}
?> 
<?php 
    echo "<form action=\"..\index.html#contact\" method=\"post\">";
    echo "<input type=\"submit\" value=\"Clique para retornar\" >";
    echo "</form>";
?>