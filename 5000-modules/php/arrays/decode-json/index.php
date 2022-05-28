<?php

$json = '{"Title": "The Cuckoos Calling",
"Author": "Robert Galbraith",
"Detail": {
"Publisher": "Little Brown"
}}';

$decodedJson = json_decode($json, true);
$detailArr = $decodedJson['Detail'];

var_dump($decodedJson);

echo "<br>";
echo "<br>";

echo array_keys($decodedJson)[0] . ': ' . array_values($decodedJson)[0];
echo "<br>";
echo array_keys($decodedJson)[1] . ': ' . array_values($decodedJson)[1];
echo "<br>";
echo array_keys($detailArr)[0] . ': ' . array_values($decodedJson)[2]['Publisher'];
