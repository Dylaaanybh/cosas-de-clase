/* function flipNumber(num){
    console.log(num);
    
    return num.split('').reverse().join('');
}
const number = document.getElementById("num").value;
let result = flipNumber(number);
document.getElementById("result").innerHTML = result; */

function flipNumber() {
    // Obtener el valor del input como cadena
    const number = document.getElementById("num").value;
    
    // Si el input está vacío, evitar que se ejecute
    if (!number) {
        document.getElementById("result").innerHTML = "Por favor ingresa un número";
        return;
    }

    // Convertir el número a cadena, invertir y mostrar el resultado
    const result = number.split('').reverse().join('');
    
    // Mostrar el resultado en el elemento con id "result"
    document.getElementById("result").innerHTML = result;
}
