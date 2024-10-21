<?php
function isPrime($number){
    for($i = 2; $i < $number; $i++){
        if($number % $i == 0){
            return false;
        }
    }
    return true;
}
function primeList($start, $end = 10): array{
    $arr = [];
    for($i = $start; $i < $end; $i++){
        if(isPrime($i)){
            $arr[] = $i;
        }
    }
    return $arr;
}

print_r(primeList(2, 100));