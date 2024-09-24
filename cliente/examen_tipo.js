// La función recibe un array multidimensional de números, es decir, cada elemento del array
// puede ser un número o un array que a su vez puede contener números o un array y así
// sucesivamente. La profundidad del array multidimensional es variable.
// La función debe devolver la suma de todos los números que contiene el array
// independientemente de la profundidad.
// Ejemplos:
// ● [] -> 0
// ● [4, 8, 3] -> 15
// ● [[2, 4], 5, [6,7]] -> 24
// ● [1, 2, [5, 4], 3, 6, [ [2, 4], 8, [9, 2, 0, [1]] ], 6, [], [8, 7]] -> 68

function sumNumbers(array) {
    let result = array.flat(Infinity).reduce((a, n) => a += n, 0);
    return result
}

function sumNumbers2(array) {
    return array.reduce((a, n)=> {if(Array.isArray(n){
        return a + sumNumbers2(n)
    }}));
}


console.log(sumNumbers([1, 2, [5, 4], 3, 6, [ [2, 4], 8, [9, 2, 0, [1]] ], 6, [], [8, 7]]));
console.log(sumNumbers2([1, 2, [5, 4], 3, 6, [ [2, 4], 8, [9, 2, 0, [1]] ], 6, [], [8, 7]]));