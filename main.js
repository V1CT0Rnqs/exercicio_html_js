//Definindo variáveis e cosntantes
const form = document.getElementById('form-medicao');
const numeroX = document.getElementById("numero-x");
const numeroY = document.getElementById('numero-y');

//Alterando a função do botão enviar
form.addEventListener("submit", function (e)
    {
         //Evitando a função padrão do botão enviar
        e.preventDefault();

        //Constante ligada a tag <p> como id de resposta
        const mensagemResposta = document.getElementById('mensagem-resposta');
        const mensagemErro = document.getElementById('mensagem-erro')

        //Mensagem caso Y seja maior que X
        const mensagemCasoY = 'O valor de Y é maior que o valor de X'
        //Mensagem caso X seja maior que Y
        const mensagemCasoX = 'O valor de X é maior que o valor de Y'
        //Mensagem caso os números sejam iguais
        const mensagemIguais = 'Os valores de X e Y são iguais'

        //Condições que definem o resultado a emitr ao usuário
        if(numeroX.value > numeroY.value) {
            mensagemErro.innerHTML = mensagemCasoX;
            mensagemErro.style.display = 'block';
        }
        else if(numeroX.value < numeroY.value){
            mensagemResposta.innerHTML = mensagemCasoY;
            mensagemResposta.style.display = 'block';
        }
        else
        {
            mensagemErro.innerHTML = mensagemIguais;
            mensagemErro.style.display = 'block';
        }
    })