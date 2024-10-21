<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulario de subida de archivos</h1>
    <form action="readFile.php" method="post" enctype="multipart/form-data">
        <p>
            Nombre:
            <input type="text" name="name">
        </p>
        <p>
            Archivo:
            <input type="hidden" name="MAX_FILE_SIZE" value="300000000">
            <input type="file" name="file">
        </p>
        <p>
            <button type="submit">Enviar</button>
        </p>
    </form>
</body>
</html>