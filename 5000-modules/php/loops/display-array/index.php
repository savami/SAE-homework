<?php

$favorites = ['Harry Potter', 'Pirates of the Caribbean', 'The Devils Advocate', 'Wolf of Wall Street', 'Silence of the Lambs', 'Pulp Fiction', 'The Matrix', 'Fight Club', 'Se7en', 'The Big Short'];

echo "<ul>";

foreach ($favorites as $favorite) {
    echo "<li>" . $favorite . "</li>";
}

echo "</ul>";