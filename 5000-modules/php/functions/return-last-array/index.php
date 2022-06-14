<?php

$cars = ["BMW", "Mercedes", "Audi", "Porsche"];

function returnLast($arr) {
    return $arr[count($arr) - 1];
}

echo returnLast($cars);