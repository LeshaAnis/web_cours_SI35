<?php

$num1 = 15;
$num2 = 28;

$sum = $num1 + $num2;

echo "Сумма чисел $num1 и $num2 равна $sum.\n";

if ($sum % 2 == 0) {
    echo "Сумма — чётное число.";
} else {
    echo "Сумма — нечётное число.";
}
?>