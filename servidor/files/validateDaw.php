<?php
print_r($_POST);
// if(!isset($_POST['name'])){
//     echo "Por favor, introduce tu nombre";
// }
if(empty($_POST['name'])){
    echo "Por favor, introduce tu nombre este campo no puede estar vacío";
}
if(empty($_POST['surname'])){
    echo "<br>Por favor, introduce tu apellido este campo no puede estar vacío";
}
if(isset($_POST['surname']) && strlen($_POST['surname'] ) < 3){
    echo "<br>El apellido debe tener al menos 3 caracteres";
}
if(empty($_POST['age'])){
    echo "<br>Por favor, introduce tu edad este campo no puede estar vacío";
}elseif(!is_numeric($_POST['age'])){
    echo "<br>Tu edad debe ser un número";
}else{
    if($_POST['age'] > 18 && $_POST['age'] < 99){
        echo "<br>Tu edad es: " . $_POST['age'];
    }else{
        echo "<br>Tu edad esta fuera de rango";
    }
}