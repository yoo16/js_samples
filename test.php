<?php

$values = ['G', 'G', 'P', 'P', 'P'];

$results = ['G' => 0, 'P' => 0];
foreach ($values as $value) {
    $results[$value]++;
}

if ($results['G'] == $results['P']) {
    echo 'DRAW';
} else if ($results['G'] > $results['P']) {
    echo 'G';
} else {
    echo 'P';
}