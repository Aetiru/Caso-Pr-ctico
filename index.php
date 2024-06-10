<?php

/*
7. Implementa un código php que devuelva los n primeros números primos
como un array. Siendo n un número entero que se le pueda pasar a la
función que lo implemente.

*/
function esPrimo($numero) {
    if ($numero <= 1) {
        return false;
    }
    for ($i = 2; $i * $i <= $numero; $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }
    return true;
}

function primerosPrimos($n) {
    $primos = [];
    $numero = 2;
    while (count($primos) < $n) {
        if (esPrimo($numero)) {
            $primos[] = $numero;
        }
        $numero++;
    }
    return $primos;
}

$n = 100; 
$primos = primerosPrimos($n);
echo "Los primeros $n números primos son: " . implode(", ", $primos);
?>
