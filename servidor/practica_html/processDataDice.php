<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>El numero que ha salido es</h1>
    <p>
        <?php
            $random = rand(1,6);
            printf("<img src='dice%d.png' alt='dice%d'>", $random, $random);
        ?>
    </p>
</body>
</html>