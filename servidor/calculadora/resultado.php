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
echo calculate($_GET['num1'], $_GET['num2'], $_GET['operator']);