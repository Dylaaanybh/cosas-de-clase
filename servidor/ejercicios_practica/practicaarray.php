<?php
$fruits = ["manzana", "plátano", "kiwi"];
print_r($fruits);

echo "El array tiene " . count($fruits) . "\n";

$fruits[] = "naranja";
print_r($fruits);

$fruits2 = $fruits;
print_r($fruits2);

array_unshift($fruits2, "sandiá");
print_r($fruits2);
print_r($fruits);

array_search("papaya", $fruits);
echo array_search("sandiá", $fruits2);

echo array_search("manzana", $fruits);