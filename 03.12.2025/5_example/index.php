<?php
$result = null;
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $num1 = filter_input(INPUT_POST, 'num1', FILTER_VALIDATE_FLOAT);
    $num2 = filter_input(INPUT_POST, 'num2', FILTER_VALIDATE_FLOAT);
    $operation = $_POST['operation'] ?? '';

    if ($num1 === false || $num2 === false) {
        $error = 'Пожалуйста, введите корректные числа.';
    } else {

        switch ($operation) {
            case 'add':
                $result = $num1 + $num2;
                break;
            case 'subtract':
                $result = $num1 - $num2;
                break;
            case 'multiply':
                $result = $num1 * $num2;
                break;
            case 'divide':
                if ($num2 == 0) {
                    $error = 'Ошибка: деление на ноль невозможно.';
                } else {
                    $result = $num1 / $num2;
                }
                break;
            default:
                $error = 'Неизвестная операция.';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Калькулятор</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        form { margin-bottom: 20px; }
        input, select, button { padding: 6px; margin: 4px; }
        .result { color: green; font-weight: bold; }
        .error { color: red; }
    </style>
</head>
<body>

<h2>Простой калькулятор</h2>

<form action="" method="post">
    <input type="number" name="num1" placeholder="Первое число" step="any" required>
    <select name="operation" required>
        <option value="add">+</option>
        <option value="subtract">−</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
    </select>
    <input type="number" name="num2" placeholder="Второе число" step="any" required>
    <button type="submit">Вычислить</button>
</form>

<?php if ($error): ?>
    <p class="error"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p>
<?php elseif ($result !== null): ?>
    <p class="result">Результат: <?= htmlspecialchars(number_format($result, 10, ',', ' '), ENT_QUOTES, 'UTF-8') ?></p>
<?php endif; ?>

</body>
</html>