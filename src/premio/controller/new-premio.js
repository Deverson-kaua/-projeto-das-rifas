$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo premio')

        $('.modal-body').load('src/premio/view/form-premio.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-premio').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-premio').modal('hide')
    })
})