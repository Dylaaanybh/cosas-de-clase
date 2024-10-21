// Ejercicio 2:
// Crea una función que recibe 3 parámetros (min, max, num) 
// todos ellos enteros y devuelve un array de num elementos que son números elegidos al azar 
// entre min y max pero que nunca se repiten. Por supuesto num no puede ser mayor que max - min.
function getRandomIntInclusive(min, max, num){
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let set = new Set();
    while(set.size < num){
        set.add(ranNum);
        ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return [...set];
}

console.log(getRandomIntInclusive(1, 10, 5));
console.log(getRandomIntInclusive(1, 100, 25));