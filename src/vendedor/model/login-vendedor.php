<?php

    session_start();
    session_destroy();
    //consulta ao banco 
    include('../../conexao/conn.php');
    $SENHA = $_REQUEST['SENHA'];
    $LOGIN = $_REQUEST['LOGIN'];

    //SQL de consulta dos dados digitados
    $sql = $pdo->query("SELECT *, count(ID) as achou FROM VENDEDOR WHERE LOGIN = '$LOGIN' AND SENHA = '$SENHA'");

    while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)){
        if($resultado['achou'] >= 1) {
            session_start();
            $_SESSION['NOME'] = $resultado['NOME'];
            $_SESSION['TIPO'] = $resultado['TIPO_ID'];
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Login efetuado com sucesso!'
            );
        } else {
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Login ou senha estão incorretos!'
            );
        }
    }

    echo json_encode($dados);