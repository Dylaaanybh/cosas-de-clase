<?php

function str2Da($str): DateTime {
    $strArray = explode('-', $str);
    return new DateTime($strArray[0]. '-' . $strArray[2] . '-' . $strArray[3]);

}
function diffDays(string $date1, string $date2): int{
    $date1 = str2Da($date1);
    $date2 = str2Da($date2);
    $diff = $date1->diff($date2);
    return $diff->days;
}
echo diffDays("2024--09-25", "2024--12-25");
