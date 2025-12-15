<?php

$users = [
    [
        "name" => "Анна",
        "age"  => 28,
        "city" => "Москва"
    ],
    [
        "name" => "Иван",
        "age"  => 35,
        "city" => "Санкт-Петербург"
    ],
    [
        "name" => "Ольга",
        "age"  => 22,
        "city" => "Новосибирск"
    ]
];

echo "<ul>\n";

foreach ($users as $user) {
    $info = "{$user['name']}, {$user['age']} лет, {$user['city']}";
    echo "  <li>" . htmlspecialchars($info, ENT_QUOTES, 'UTF-8') . "</li>\n";
}

echo "</ul>\n";
?>