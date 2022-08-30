$(document).ready(function() {

    $('#table-promocao').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/promocao/model/view-promocao.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/promocao/view/form-promocao.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#INICIO').val(dado.dados.DATA_INICIO)
                        $('#TERMINO').val(dado.dados.DATA_FIM)
                        $('#SORTEIO').val(dado.dados.DATA_SORTEIO)
                        $('#ARRECADACAO').val(dado.dados.ARRECADACAO)
                        $('#VALOR').val(dado.dados.VALOR_RIFA)
                        $('#TITULO').attr('readonly', 'true')
                        $('#DESCRICAO').attr('readonly', 'true')
                        $('#INICIO').attr('readonly', 'true')
                        $('#TERMINO').attr('readonly', 'true')
                        $('#SORTEIO').attr('readonly', 'true')
                        $('#ARRECADACAO').attr('readonly', 'true')
                        $('#VALOR').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-promocao').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // promocao de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})