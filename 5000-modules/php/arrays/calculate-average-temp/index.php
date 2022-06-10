<?php

$temp = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];

$average = array_sum($temp) / count($temp);

echo "The average temperature is: " . ceil($average) . " degrees (rounded up from $average)"; // ceil to round up the temperature
echo "<br>";

rsort($temp);
$highestTemps = implode(", ", array_slice($temp, 0, 5));
$lowestTemps = implode(", ", array_slice($temp, -5, 5));

echo "The five highest recorded temperatures were: " . $highestTemps . " degrees";
echo "<br>";
echo "The five lowest temperatures recorded were: " . $lowestTemps . " degrees";