<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $nombre = $_POST["nombre"];
   $email = $_POST["email"];
   $telefono = $_POST["telefono"];
   $asunto = $_POST["asunto"];
   // Resto de los campos del formulario

   // Configura los detalles del correo
   $destinatario = "j_chalo@hotmail.com";
   $asuntoCorreo = "Nuevo mensaje del formulario de contacto";

   // Construye el cuerpo del correo
   $mensaje = "Has recibido un nuevo mensaje del formulario de contacto:\n\n";
   $mensaje .= "Nombre: " . $nombre . "\n";
   $mensaje .= "Email: " . $email . "\n";
   $mensaje .= "Teléfono: " . $telefono . "\n";
   $mensaje .= "Asunto: " . $asunto . "\n";
   // Resto de los campos del formulario

   // Envía el correo
   $headers = "From: " . $email . "\r\n";
   if (mail($destinatario, $asuntoCorreo, $mensaje, $headers)) {
      // El correo se envió exitosamente
      echo "success";
   } else {
      // Ocurrió un error al enviar el correo
      echo "error";
   }
}
?>
