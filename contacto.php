<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Proyecto Web</title>
	<link rel="stylesheet" href="style2.css">
</head>
<body>
<?php
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];

	//Si todos los campos traen valor
	if(!empty($nombre) && !empty($correo) && !empty($mensaje)){
		$msg = "<p>El usuario $nombre ($correo) envió el siguiente mensaje<p>
		<p>$mensaje</p>\n";
		
		//mostrar qué se recibió
		echo $msg;

		//o si está configurado el servicio SMTP del servidor, enviar el correo
		//$destino = "straydigital@hotmail.com";
		//mail($destino, 'Solicitud de contacto', $msg);
	}
	else
		die("<h2>Error enviando correo, todos los campos son obligatorios.</p>");
?>
<!-- poner aquí el diseño de la página cuando envian correo -->
</body>
</html>