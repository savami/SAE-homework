<?php

$ceu = array(
    "Italy"=>"Rome",
    "Luxembourg"=>"Luxembourg",
    "Belgium"=> "Brussels",
    "Denmark"=>"Copenhagen",
    "Finland"=>"Helsinki",
    "France" => "Paris",
    "Slovakia"=>"Bratislava",
    "Slovenia"=>"Ljubljana",
    "Germany" => "Berlin",
    "Greece" => "Athens",
    "Ireland"=>"Dublin",
    "Netherlands"=>"Amsterdam",
    "Portugal"=>"Lisbon",
    "Spain"=>"Madrid",
    "Sweden"=>"Stockholm",
    "United . Kingdom"=>"London",
    "Cyprus"=>"Nicosia",
    "Lithuania"=>"Vilnius",
    "Czech . Republic"=>"Prague",
    "Estonia"=>"Tallin",
    "Hungary"=>"Budapest",
    "Latvia"=>"Riga",
    "Malta"=>"Valetta",
    "Austria" => "Vienna",
    "Poland"=>"Warsaw"
);

echo "The capital of " . array_keys($ceu, 'Rome')[0] . " is " . $ceu['Italy'];
echo "<br>";
echo "The capital of " . array_keys($ceu, 'Brussels')[0] . " is " . $ceu['Belgium'];
echo "<br>";
echo "The capital of " . array_keys($ceu, 'Amsterdam')[0] . " is " . $ceu['Netherlands'];