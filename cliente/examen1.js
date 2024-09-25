// Ejercicio 1: 
// Lista de temperaturas de ºF a ºC.
// Crea una función que recibe un array con números que representan temperaturas en grados
// fahrenheit (ºF) y devuelve un array con las mismas temperaturas pero representadas en
// grados centígrados (ºC).
// La función para pasar de grados ºF a ºC es la siguiente:
// Grados centígrados = (grados Fahrenheit − 32) × 5/9
// Ejemplo:
// ● ([68, 50, 46.4, 39, 90]) devuelve [20, 10, 8, 3.888888888888889,
// 32.22222222222222]
// ● ([20, 0, -10]) devuelve [-6.666666666666667, -17.77777777777778,
// -23.333333333333332]
// ● ([]) devuelve []

function changeFtoC(array){
    return array.map((n) => (n-32) * 5/9);
}
console.log(changeFtoC([68, 50, 46.4, 39, 90]));
console.log(changeFtoC([20, 0, -10]));

// Ejercicio 2: 
// ¿Temperatura por debajo de 0ºC?
// Crea una función que admite un número indeterminado de muestras de temperatura en ºC y
// nos devuelve verdadero si alguna está por debajo de 0ºC y falso en caso contrario.
// Ejemplo:
// ● (22, 5, 13, 0, 35) devuelve false.
// ● (15, 3, -4, 8, -2, 10, 14, 16) devuelve true.
// ● () devuelve false

function temperatureUnderZero(...numbers){
    for(let i = 0 ; i < numbers.length; i++){
        if(numbers[i] < 0){
            return true;
        }
    }
    return false;
}
console.log()
console.log(temperatureUnderZero(22, 5, 13, 0, 35));
console.log(temperatureUnderZero(15, 3, -4, 8, -2, 10, 14, 16));
console.log(temperatureUnderZero());


// Ejercicio 3: 
// Palabras de ciertas longitudes.
// Crea una función que admite un string con un texto y un número indeterminado de números
// que representan longitudes de palabras.
// La función debe devolver el mismo texto pero solo con las palabras que tienen dicha
// longitud.
// Todas las palabras están separadas por espacios. No tienes que tener en cuenta los signos
// de puntuación..
// Ejemplo:
// ● ('Primero resuelve el problema y después escribe el código', 8)
// devuelve “resuelve problema”
// ● ('Siempre escribe tu código como si la persona que lo fuera a
// mantener fuera un peligroso psicópata que sabe quien eres y donde
// vives', 9) devuelve “peligroso psicópata”
// ● ('Para entender la recursividad hay que entender lo que es la
// recursividad', 4, 3, 8) devuelve “Para entender hay que entender
// que”
// ● ('Es más difícil leer código que escribirlo') devuelve “”.

function searchWordsWithLength(text, ...maxLetters){
    let result = [];
    let textSplit = text.split(" ");
    for (let i = 0; i < textSplit.length; i++) {
        for (let j = 0; j < maxLetters.length; j++) {
            if (textSplit[i].length == maxLetters[j]) {
                result.push(textSplit[i]);
            }
        }
    }
    return result.join(" ");
}

console.log()
console.log(searchWordsWithLength('Primero resuelve el problema y después escribe el código', 8));
// Ejercicio 4: 
// Fecha con formato.
// Crea una función que admite un string en formato “dia-mes-año” y debe devolver un array
// mostrando la fecha en el formato “Dia de la semana, dia del mes de año”. En caso de que
// falte el día, mes o año, debe devolver “Fecha no válida”.
// Ejemplo:
// ● ("20-12-2012") devuelve “jueves, 20 de diciembre de 2012”.
// ● ("2-1-2024") devuelve “martes, 2 de enero de 2024”.
// ● ("2-2024") devuelve “Fecha no válida”.
// ● ("40-5-24") puede elegir entre devolver una de las siguientes
// opciones (ambas se considerarán correctas):
// ○ “Fecha no válida” porque no es una fecha correcta.
// ○ “lunes, 9 de junio de 1924”. Porque mayo tiene 31 días y
// sigue contando 9 días de junio para llegar a los 40.

function formatDate(dateclientstr){
    dateclientstr.split("-");
    let aux1 = dateclientstr[0];
    let aux2 = dateclientstr[1];
    dateclientstr[0] = aux2;
    console.log(dateclientstr)
    let date = new Date(dateclientstr)
    console.log(date);

}

console.log()
console.log(formatDate("20-12-2012"));


// Ejercicio 5: 
// Cuenta números
// Crea una función a la que se le pasa un número indeterminado de números de un dígito (0 a
// 9) y te devuelve un array indicando el número de 0s, 1s,...9s que había.
// Ejemplos:
// ● (4,5,2,3,2,2,0,6,5,2) devuelve [1, 0, 4, 1, 1, 2, 1, 0, 0, 0]
// ● (1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8) devuelve [0, 1, 2, 3, 4,
// 4, 3, 2, 1, 0]
// ● () devuelve [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ● (9,8,7,6,5,4,3,2,1,0) devuelve [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

function countNumbers(...numbers){
    let numForCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = numForCount.map(n => 0);
    for(let i = 0; i < numForCount.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if( numbers[j] == numForCount[i] ){
                result[i]++;
            }
        }
    }
    return result;
}

console.log();
console.log(countNumbers(4,5,2,3,2,2,0,6,5,2));
console.log(countNumbers(1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8));
console.log(countNumbers(9,8,7,6,5,4,3,2,1,0));