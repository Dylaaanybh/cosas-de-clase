<?php
function calculate( $op1, $op2, $operator ) {
    $result;
    switch ($operator){
        case '+':
            $result = $op1 + $op2;
            break;
        case '-':
            $result = $op1 - $op2;
            break;
        case 'x':
            $result = $op1 * $op2;
            break;
        case '/':
            $result = $op1 / $op2;
            break;
        default:
            $result = $op1;
    }
    return $result;
}
if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['operator'])){
    $op1= calculate($_GET['num1'], $_GET['num2'], $_GET['operator']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Calculadora</h1>
    <form action="calculadora.php" method="get">
        <p>
            <label for="">Operador 1:</label>
            <?php if(isset($op1)){?>
                <input type="number" name="num1" value="<?=$op1?>">
            <?php } else{?>
            <input type="number" name="num1">
            <?php }?>
        </p>
        <p>
            <label for="num2">Operador 2:</label>
                <input type="number" name="num2">
        </p>
        <p>
            <input type="submit" value="+" name="operator">
            <input type="submit" value="-" name="operator">
            <input type="submit" value="x" name="operator">
            <input type="submit" value="/" name="operator">
            <input type="submit" value="clear">
        </p>
    </form>
</body>
</html>