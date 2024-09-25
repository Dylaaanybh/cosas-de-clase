<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
    <div>
        <h1>Formulario que envia datos a una pagina php</h1>
            <form action="processData.php" method="post">
                <p>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Escribe tu nombre">
                </p>
                <p>
                    <label for="age">Edad</label>
                    <input type="number" id="age" name="age">
                </p>
                <p>
                    <label for="hobby">Aficiones</label>
                    <select name="hobby" id="hobby">
                        <option value="futbol">Futbol</option>
                        <option value="baloncesto">Baloncesto</option>
                        <option value="natacion">Natacion</option>
                        <option value="ciclismo">Ciclismo</option>
                    </select>
                </p>
                <p>
                    <input type="checkbox" name="course" id="course">
                    <label for="course">Matriculado en el ciclo</label>
                </p>
                <p>
                    <span>¿Qué te gusta más?</span>
                    <input type="radio" name="side" id="frontend" value="frontend">
                    <label for="frontend">Frontend</label>
                    <input type="radio" name="side" id="backend" value="backend">
                    <label for="backend">Backend</label>
                    <input type="radio" name="side" id="fullstack" value="fullstack">
                    <label for="fullstack">Fullstack</label>
                </p>
                <p>
                    <label for="subject">¿Qué modulo te gusta más?</label>
                    <?php require_once ("subjectData.php"); ?>
                    <select name="subject" id="subject">
                        <?php foreach($subjects as $key => $value){ ?>
                            <option value="<?= $key ?>"><?= $value ?></option>
                        <?php } ?>
                    </select>
                </p>
                <p>
                    <label for="company">¿En qué empresa te gustaría hacer las prácticas?</label>
                    <select name="companiesId[]" id="company" multiple>
                    <?php require_once ("companies.php"); 
                    for($i = 0; $i < count($companies); $i++){
                        printf("<option value='%s'>%s</option>", $i, $companies[$i]);
                    }
                    ?>
                    </select>
                </p>
                <p>
                    <label for="county">¿En que provincia vives?</label>
                    <select name="county" id="county">
                    <?php require_once ("datos_provincias.php");
                    for($i = 0 ; $i < count($counties) ; $i++){
                        printf("<option value= '%s'>%s</option>", $i, $counties[$i]);
                    }
                    ?>
                    </select>
                </p>
                <p>
                    <button type="submit" value="send">Enviar</button>
                </p>    
            </form>
    </div>
  
</body>
</html>