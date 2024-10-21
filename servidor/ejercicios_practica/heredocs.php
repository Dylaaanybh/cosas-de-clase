<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>EJ 1</h2>
    <pre>
    <?php
    $PI = M_PI;
    printf("%.2f", $PI);
    ?>
    </pre>

    <h2>EJ 2</h2>
    <pre><?php
    $name = "pepe";
    $edad = 20;
    printf(" Mi nombre es %s y tengo %d", $name, $edad);
    ?></pre>

    <h2>EJ 3</h2>

    <pre>
        <?php
        printf("%20s
        %20s
        %20s", "JAVASCRIPT", "PHP", "JAVA");
        ?>
    </pre>

    <h2>EJ 4</h2>

    <pre>
        <?php
        $date = sprintf("%02.2s/%02.2s/%04.4s", "9", "", "30280709");
        print($date);
        ?>
    </pre>
</body>
</html>

