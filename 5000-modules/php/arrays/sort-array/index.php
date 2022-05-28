<?php

$arr = array
(
    "Sophia"=>"31",
    "Jacob"=>"41",
    "William"=>"39",
    "Ramesh"=>"40"
);

print_r(array_keys($arr));
echo "<br>";
echo "<br>";
print_r(array_values($arr));

echo "<br>";
echo "<br>";

print_r(array_reverse(array_keys($arr)));

echo "<br>";
echo "<br>";

print_r(array_reverse(array_values($arr)));