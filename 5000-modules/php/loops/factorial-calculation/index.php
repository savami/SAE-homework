<?php

$n = 5;
$n2 = 1;

for ($i = $n; $i >= 1; $i--) {
    $n2 = $n2 * $i;
}

echo "Factorial of $n is $n2";
