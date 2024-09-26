<?php
$fileDir = "../files/";
print "<h1>POST</h1><pre>";
var_dump($_POST);
print "</pre><h1>Files</h1><pre>";
var_dump($_FILES);
print "</pre>";

if($_FILES['file']['error'] != 0) {
    echo "Error al subir el archivo.";
}else {
    if($_FILES['file']['type'] != "application/pdf") {
        echo "Solo se permiten archivos PDF";
    }else{
        if (move_uploaded_file($_FILES['file']['tmp_name'], $fileDir . $_FILES['file']['name'])) {
            echo "El archivo se ha subido exitosamente.";
            printf("<a href='%s'>Ver documento</a>", $fileDir . $_FILES['file']['name'], $_FILES['file']['name']);
        } else {
            echo "Error al subir el archivo.";
            
        }
    }
}