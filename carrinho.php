<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Olá $nome, Sua Compra Foi Finalizada!</h1>
    </header>
    <section>
        <h2>Seu total: </h2>
        <br>
        <?php 
            $c = $_GET['cupom'];
            if ($c == "15"){
                echo "Seu total é de R$17,00";
            } else if ($c == "10"){
                echo "Seu total é de R$18,00";
            } else{
                echo "Seu total é de R$20,00";
            }
        ?>
    </section>
    <a href="inicial.html" target="_self"> <button>Voltar às compras</button></a>
</body>
</html>