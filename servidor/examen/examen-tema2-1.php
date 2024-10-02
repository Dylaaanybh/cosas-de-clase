<?php
function changeArray($array, $number){
    if(in_array($number, $array)){
        unset($array[array_search($number, $array)]);
        sort($array);
    }
    else{
        array_push($array, $number);
    }
    return $array;
}

print_r(changeArray([1, 2, 3, 4, 5],3));
print_r(changeArray([1, 2, 4, 5], 3));