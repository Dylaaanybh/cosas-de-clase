<?php require_once("data_provincias.php"); 
require_once("data_municipios.php");
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>PUEBLOS DE ESPAÑA</h1>
    <form action="provincias.php" method="post">
        
        <?php
        if(isset($_POST['province'])) {
            if(isset($_POST['town'])) {
                printf('<h2>El municipio de %s con código %s pertenece a %s</h2>', $MUNICIPIOS[$_POST['province']][$_POST['town']], $_POST['town'], $PROVINCIAS[$_POST['province']]);
            }else{
                
            printf('<h2>PROVINCIA %s</h2>', $PROVINCIAS[$_POST['province']]);
        ?>
        
        <p>
            <label for="town">Municipio:</label>
            <select name="town">
                <option selected disabled>Elige un municipio</option>
                <?php

                    foreach($MUNICIPIOS[$_POST['province']] as $key => $town){
                        printf('<option value=%s>%s</option>', $key, $town);
                    }
                    ?>
            </select>

            <input type="hidden" name="province" value="<?=$_POST['province']?>">
        </p>
        
        <?php
            }
        }else{
        ?>
    
        <p>
            <label for="province">Provincia:</label>
            <select name="province">
                <option selected disabled>Elige una provincia</option>
                <?php
         
                    foreach($PROVINCIAS as $key => $province){
                        printf('<option value=%s>%s</option>', $key, $province);
                    }
                    ?>
            </select>
        </p>
        <?php
        }
        ?>
        <p>
            <button type="submit" value="send">Enviar</button>
        </p>

    </form>
</body>
</html>