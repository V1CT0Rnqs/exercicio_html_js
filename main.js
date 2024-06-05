//Definindo variáveis e cosntantes
const form = document.getElementById('form-medicao');
let numeroX = document.getElementById("numero-x");
let numeroY = document.getElementById('numero-y');

//Alterando a função do botão enviar
form.addEventListener("submit", function (e)
    {
         //Evitando a função padrão do botão enviar
        e.preventDefault();

        //Constante ligada a tag <p> como id de resposta
        const mensagemResposta = document.getElementById('mensagem-resposta');

        //Mensagem caso Y seja maior que X
        const mensagemCasoY = 'O valor de <b>Y</b> é maior que o valor de <b>X</b>'
        //Mensagem caso X seja maior que Y
        const mensagemCasoX = 'O valor de <b>X</b> é maior que o valor de <b>Y</b>'
        //Mensagem caso os números sejam iguais
        const mensagemIguais = 'Os valores de <b>X</b> e <b>Y</b> são iguais'

        //Condições que definem o resultado a emitr ao usuário
        if(numeroX.value > numeroY.value)
        {
            mensagemResposta.innerHTML = mensagemCasoX;
            mensagemResposta.style.display = 'block';
        }
        else if(numeroY.value == numeroX.value)
        {
            mensagemResposta.innerHTML = mensagemIguais;
            mensagemResposta.style.display = 'block';
        }
        else
        {
            mensagemResposta.innerHTML = mensagemCasoX;
            mensagemResposta.style.display = 'block';
        }
    })

