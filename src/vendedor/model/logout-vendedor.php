<?php

    session_start(); //Inicia a sessão para coletar as informações existentes na sessão do navegador

    session_destroy(); //Destruo todas as informações da sessão e também a encerro

    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Logout realizado com sucesso"'
    );

    echo json_encode($dados);