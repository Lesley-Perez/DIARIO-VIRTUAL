<?php
// Función para obtener la fecha actual en formato 'Y-m-d H:i:s'
function getCurrentDateTime() {
    return date('Y-m-d H:i:s');
}

// Función para generar un informe financiero
function generateReport() {
    // Aquí puedes implementar la lógica para generar el informe financiero
    $totalIngresos = 500; // Por ejemplo, obtener el total de ingresos desde la base de datos
    $totalGastos = 300; // Por ejemplo, obtener el total de gastos desde la base de datos
    $balance = $totalIngresos - $totalGastos;

    return [
        'success' => true,
        'totalIngresos' => $totalIngresos,
        'totalGastos' => $totalGastos,
        'balance' => $balance
    ];
}

// Verificar si se ha enviado una solicitud para generar el informe financiero
if (isset($_GET['generateReport'])) {
    echo json_encode(generateReport());
    exit;
}

// Verificar si se han enviado datos del formulario para registrar una transacción
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $transactionType = $_POST['transactionType'];
    $amount = $_POST['amount'];
    $category = $_POST['category'];

    // Validar y procesar los datos de la transacción...
    // Simulando una transacción válida:
    $transactions = [
        [
            'date' => getCurrentDateTime(),
            'type' => $transactionType,
            'amount' => $amount,
            'category' => $category
        ]
    ];

    // Simulando un presupuesto actualizado
    $budget = 1000; // Por ejemplo, obtener el presupuesto actual desde la base de datos

    echo json_encode([
        'success' => true,
        'transactions' => $transactions,
        'budget' => $budget
    ]);
    exit;
}

// Si no se ha recibido ninguna solicitud válida, devuelve un error
echo json_encode(['success' => false, 'message' => 'Solicitud no válida']);
