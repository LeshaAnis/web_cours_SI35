<?php

function printNumbers($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        echo $i . PHP_EOL;
    }
}

printNumbers(1, 10);
?>