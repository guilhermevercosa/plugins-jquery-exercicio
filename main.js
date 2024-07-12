$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 34567-8910'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-10'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome no campo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})