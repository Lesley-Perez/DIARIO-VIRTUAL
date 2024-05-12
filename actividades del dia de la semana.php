<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividades Semanales</title>
</head>
<body>
    <h1>Actividades Semanales</h1>

    <?php
    // Array asociativo con las actividades de la semana
    $actividades = array(
        "Lunes" => "Ir al trabajo",
        "Martes" => "Clase de yoga",
        "Miércoles" => "Comprar víveres",
        "Jueves" => "Reunión con amigos",
        "Viernes" => "Cita con el médico",
        "Sábado" => "Ir al cine",
        "Domingo" => "Día de descanso"
    );

    // Verificar si se ha hecho clic en algún día de la semana
    if (isset($_GET['dia'])) {
        $diaSeleccionado = $_GET['dia'];
        if (array_key_exists($diaSeleccionado, $actividades)) {
            echo "<p>Actividad para el $diaSeleccionado: " . $actividades[$diaSeleccionado] . "</p>";
        } else {
            echo "<p>No se encontraron actividades para este día.</p>";
        }
    }
    ?>

    <!-- Mostrar los días de la semana como enlaces -->
    <ul>
        <?php
        // Iterar sobre los días de la semana
        foreach ($actividades as $dia => $actividad) {
            echo "<li><a href='?dia=$dia'>$dia</a></li>";
        }
        ?>
    </ul>
</body>
</html>
