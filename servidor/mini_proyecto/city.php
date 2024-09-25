<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php $city = $_GET["city"]; ?>
    <?php $country = $_GET["country"]; ?>
    <h1>Listado de ciudades <?=$city?> del país <?= $country ?></h1>
</body>
</html>