<?php
$bill = [
    ['Ron Zacapa 23', 59.99, 2],
    ['Chivas Regal 18', 65, 1],
    ['Glenfiddich 12', 45.55, 3],
    ['Johnnie Walker Blue Label', 180, 1],
    ['Macallan 18', 250, 1],
    ['Jameson Irish Whiskey', 29.9, 4],
    ['Hennessy VS', 40, 2],
    ['Patrón Silver Tequila', 50.1, 2],
    ['Grey Goose Vodka', 55.00, 1],
    ['Baileys Irish Cream', 25.00, 3],
    ['Estrella de Galicia', .7, 24],
    ];    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="full">
        <th>Artículo</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <tbody>
            <?php
                $total = 0;
            foreach ($bill as $value) {
                $total += ($value[1] * $value[2]);
                printf("<tr>
                <td>%s</td>
                <td>%0.2f$</td>
                <td>%02d</td>
                <td>%'.10.2f$</td>
                </tr>
                
                ", $value[0], $value[1], $value[2], ($value[1] * $value[2]));
            }
            printf('<td colspan="3">Total</td>
            <td>%.2f$</td>', $total)
            ?>
        </tbody>
    </table>
</body>
</html>