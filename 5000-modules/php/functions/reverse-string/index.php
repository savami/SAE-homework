<?php

$hello = "Hello my name is Sava";

function reverseHello($string) {
    $stringLength = strlen($string);

    for ($i = ($stringLength - 1); $i >= 0; $i--) {
        echo $string[$i];
    }
}

reverseHello($hello);