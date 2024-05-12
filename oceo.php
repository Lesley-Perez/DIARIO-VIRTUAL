<?php
// Comprobar si se han enviado datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $titulo = $_POST["titulo"];
    $tipo = $_POST["tipo"];
    $valoracion = $_POST["valoracion"];
    $sentimiento = $_POST["sentimiento"];
    $descripcion = $_POST["descripcion"];

    // Aquí podrías guardar los datos en una base de datos, archivo de texto, etc.
    // Por ahora, simplemente mostraremos los datos en pantalla
    echo "<h2>¡Datos Guardados!</h2>";
    echo "<p>Título: $titulo</p>";
    echo "<p>Tipo: $tipo</p>";
    echo "<p>Valoración: $valoracion</p>";
    echo "<p>Cómo me hizo sentir: $sentimiento</p>";
    echo "<p>Descripción: $descripcion</p>";
}
?>
