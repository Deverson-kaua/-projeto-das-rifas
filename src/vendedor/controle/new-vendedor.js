$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('#modal-vendedor .modal-title').empty()


        $('#modal-vendedor .modal-title').append('Adicionar novo vendedor de vendedor')

        $('#modal-vendedor .modal-body').load('src/vendedor/visao/form-vendedor.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-vendedor').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-vendedor').modal('hide')
    })
})