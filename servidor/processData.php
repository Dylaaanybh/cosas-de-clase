<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Obteniendo los datos</h1>
    <?php
    $name = $_POST['name'];
    $age = $_POST['age'];
    echo "Hola $name, tienes $age años";
    ?>
</body>
</html>