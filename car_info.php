<?php

$jsonFilePath = "car.json";

header('Content-Type: application/json');

$jsonData = file_get_contents($jsonFilePath);

$cars_array = json_decode($jsonData, true);

foreach ($cars_array['car'] as $car) {
    echo "<div>";
    echo "<h2>{$car['brand']} {$car['model']}</h2>";
    echo "<p>Type: {$car['type']}</p>";
    echo "<p>Mileage: {$car['Mileage']}</p>";
    echo "<p>Stock: {$car['stock']}</p>";
    echo "<p>Fuel Type: {$car['fuel type']}</p>";
    echo "<p>Seats: {$car['seats']}</p>";
    echo "<p>Price per Day: {$car['price_per_day']}</p>";
    echo "<p>Description: {$car['description']}</p>";
    echo "<img src='{$car['image']}' alt='{$car['brand']} {$car['model']}' width='200'>";
    echo "</div>";
}
?>
