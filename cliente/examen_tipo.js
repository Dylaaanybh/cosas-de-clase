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

console.log(sumNumbers([1, 2, [5, 4], 3, 6, [ [2, 4], 8, [9, 2, 0, [1]] ], 6, [], [8, 7]]));


// La función recibe un texto que contiene palabras y debe calcular la media de la longitud de
// las letras que tienen las palabras incluidas en el texto.
// Las palabras pueden tener signos de puntuación que son . , : ;
// Los signos de puntuación no se deben contar en la longitud de la palabra.
// Ejemplos:
// ● "" -> 0
// ● "Este texto tiene palabras más palabras y signos" -> 5
// ● "Este texto tiene: palabras, más palabras y signos." -> 5

function averageWordLength(text) {
    let regex = [".", ",", ":", ";"];
    for (let i = 0; i < regex.length; i++) {
        text = text.replaceAll(regex[i], "");
    }
    let words = text.split(" ");
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        result += words[i].length;
    }
    return result / words.length
}

console.log(averageWordLength("Este texto tiene: palabras, más palabras y signos."));
console.log(averageWordLength("Este texto tiene palabras más palabras y signos"));

// La función debe recibir dos parámetros:
// 1. Un texto
// 2. palabra1
// 3. palabra2
// 4. …
// 5. palabraN
// (Es decir,después del texto viene un número indeterminado de palabras)
// La función debe devolver un array de igual longitud al número de palabras que se le
// suministra indicando el número de ocurrencias de esa palabra en el texto suministrado
// como primer parámetro.
// Ejemplos:
// let text=”De las palabras de la lista, la palabra está en la lista.”
// ● (text, 'las') -> [1]
// // Porque “las” solo aparece una vez en el texto.
// ● (text) -> []
// // Porque no hay palabras que buscar.
// ● (text,'lista', 'en', 'berenjena', 'palabra') -> [2, 1, 0, 2]
// // Porque “lista” aparece 2 veces, “en” aparece 1 vez,
// “berenjena” no aparece ninguna vez y “palabra” aparece 2 veces
// (una como “palabra” y otra dentro de “palabras”)

function countWords(text, ...words) {
    let result = words.map(a => 0);
    console.log(words);
    let regex = [".", ",", ":", ";"];
    for (let i = 0; i < regex.length; i++) {
        text = text.replaceAll(regex[i], "");
    }
    console.log(text.split(" "));
    let textSplit = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < textSplit.length; j++) {
            if (textSplit[j] == words[i]) {
                result[i]++;
            }
        }
    }
    return result;
}

console.log(countWords("De las palabras de la lista, la palabra está en la lista.", "las", "lista", "en", "berenjena", "palabra"));

// La función no necesita parámetros. Responde un array cuyos elementos son:
// 1. Un número aleatorio del 0 al 36. (Y según ese número el resto de elementos debe
// indicar si…)
// 2. ¿Es par?
// 3. ¿Es rojo? (Los números rojos son 1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 30, 32,
// 34 y 36).
// 4. ¿Es pasa? (Número del 19 al 36)
// Si sale el valor 0, el array solo devuelve el 0 porque los otros elementos no tienen sentido.
// Ejemplo:
// ● [0]
// ● [1, false, true, false]
// ● [30, true, true, true]
// ● [15, false, false, false]



function loteria() {
    let randomNumber = Math.floor(Math.random() * 37);
    console.log(randomNumber);
    let array = [randomNumber];
    console.log(array);
    let red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 30, 32, 34, 36];
    if (randomNumber == 0) {
        return array;
    } if (randomNumber % 2 == 0) {
        array.push(true);
    }
    if (red.includes(randomNumber)) {
        array.push(true);
    }
     if (19 <= randomNumber < 37){
        array.push(true);
    }
    return array;
}

console.log(loteria());