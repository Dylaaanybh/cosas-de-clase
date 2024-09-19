<?php
function valoresimpares($start = 0, $end = 10){
    for($i= $start; $i <= $end; $i++){
        if($i % 2 != 0){
            echo $i . "\n";
        }
    }
}
valoresimpares(5);