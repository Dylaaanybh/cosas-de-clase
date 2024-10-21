<?php require_once("subjectData.php"); ?>
<?php require_once("companies.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Obteniendo los datos</h1>
    </header>
    <div>
        <div>
            <?php
            $name = $_POST['name'];
            $age = $_POST['age'];
            echo "Hola $name, tienes $age años";
            ?>

        </div>
        <div>
            <p>
                <?php echo $_POST['hobby']; ?>
            </p>
        </div>
        <div>
            <p>
                Esta cursando el ciclo:
                <?php echo isset($_POST['course']) ? "si" : "no"; ?>
            </p>
        </div>
        <div>
            <p>
                Le gusta más el:
                <?php echo $_POST['side']; ?>
            </p>
        <div>
            <p>
                El modulo favorito es:
                <?php echo $subjects[$_POST['subject']]; ?>
            </p>
        </div>
            <p>
                En la empresa:
                <!-- <?php 
                // echo $companies[$_POST['companies']]; 
                ?> -->
                <ul>
                    <?php
                        $companiesid = $_POST['companiesId'];
                        for($i = 0; $i < count($companiesid); $i++){
                            printf("<li>%s</li>", $companies[$companiesid[$i]]);
                        }
                    ?>
                </ul>
            </p>
        </div>
    </div>
</body>
</html>