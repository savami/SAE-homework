<?php

$numbers = [5, 3, 1, 3, 8, 7, 4, 1, 1, 3];

echo "The unsorted numbers are: ";
print_r($numbers);

echo "<br>";
echo "<br>";
echo "<br>";

function columns($arr) {
    $n = $arr;
    if(count($n) == 0)
        return array();
    else if (count($n) == 1)
        return array_chunk($n[0], 1);
    array_unshift($arr, NULL);
    $transpose = call_user_func_array('array_map', $arr);
    return array_map('array_filter', $transpose);
}

function bead_sort($arr) {
    foreach ($arr as $e)
        $poles []= array_fill(0, $e, 1);
    return array_map('count', columns(columns($poles)));
}

$sorted = bead_sort($numbers);
echo "The bead-sorted numbers are: ";
print_r($sorted);