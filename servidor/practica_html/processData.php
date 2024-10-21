<?php
foreach($_POST as $value){
    if(!empty($value)){
        echo "Por favor, rellena todos los campos";
        return ;
    }

}
$textArea = $_POST['name'];
$color = $_POST['typeColor'];
$sizeLetter = $_POST['sizeLetter'];
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Aqui se enseña</h1>
    <p style="color:<?=$color?>; font-size:<?=$sizeLetter?>px;"><?=$textArea?></p>
</body>
</html>
