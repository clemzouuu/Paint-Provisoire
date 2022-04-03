<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="apaint.css">
    <title>The Paint Project</title>

 <!-- Permet de se connecter à la base de donnée-->
<?php 
$engine = "mysql";
$host = "localhost";
$port = 8889;  
$dbname = "paint_db";
$username = "root";
$password = "root"; 

$pdo = new PDO("$engine:host=$host:$port;dbname=$dbname", $username, $password);
?>

</head>
<body>
    <div id="barre_du_haut"> 
        <form method="POST" action="apaint.php" id="form_1"> 
            <input type="hidden" name="data" id="form_data" />
            <input type="text" name="name" required placeholder="Nom du dessin"/>
            <input type="checkbox" name="save">Sauvegarder</input>
            <input type="submit" id="exporter" name="exporter">
        </form>


    </div>

        <!-- Main = Zone blanche de dessin  -->
        <!-- Sauvegarde et charge de dessins depuis la zone de dessin-->
        <main id="dessin">
            <?php

            // Si on est en POST, et qu'un nom est attribué au dessin, il est sauvegardé dans la BDD
                if($_SERVER['REQUEST_METHOD'] === 'POST') {
                    if(isset($_POST['save'])){
                        $data = $_POST['data'];
                        $name = $_POST['name'];
                        echo"<script>alert('Sauvegarde effectuée')</script>";
                        echo $data;
                        $marequete = $pdo->prepare("INSERT INTO save (name,data) values(:name,:data)");  
                        $marequete->execute([
                            ":name" => $name,
                            ":data" => $data,
                        ]);
                // Si le nom du dessin est entré, permet de le récuperer et de l'afficher
                    }else{
                        $name = $_POST['name'];
                        $marequete = $pdo->prepare("SELECT * from save where name= :name");  
                        $marequete->execute([
                            ":name" => $name
                        ]);
                        $forme = $marequete->fetch();
                        if(count($forme) > 0) {
                            echo $forme['data'];
                        }

                        // En cas de nom erroné entré dans l'input
                        else {
                            echo "<script>alert('Pas de sauvegarde de ce nom')</script>";
                        }
                    }
                }
            ?>
        </main>

        <!-- Zone incluant les options de dessin -->
        <div id="options">
            <nav id="texte_et_formes">
                <img src="svg/rectangle.svg" alt="rectangle" id="rectangle">
                <img src="svg/cercle.svg" alt="cercle" id="cercle">
                <img src="svg/triangle.svg" alt="triangle" id="triangle">
                <img src="svg/lettre.svg" alt="lettre" id="texte">  
            </nav>

            <nav id="contour_et_remplissage">
                <img src="svg/contour_rectanlge_couleur.svg" alt="rectangle aux bordures rouges"  id="forme_couleur_contours">
                <img src="svg/lettre_couleur.svg" alt="lettre de couleur" id="lettre_couleur">
                <img src="svg/remplissage.svg" alt="remplir"  id="forme_couleur_interieur">
                <img src="svg/surligner.svg" alt="surligner"  id="surligner">
            </nav>
            <nav id="size">
                <p class="sizeUp">+</p>
                <p class="sizeDown">-</p>
            </nav>
        </div>
    <script src="apaint.js"></script>


</body>
</html>

