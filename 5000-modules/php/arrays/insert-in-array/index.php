<?php

$arr = [1, 2, 3, 4, 5];

array_splice($arr, 3, 0, "$");

var_dump($arr);