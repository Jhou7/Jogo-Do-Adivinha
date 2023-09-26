let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tetativas = 1;


function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function verificarChute(){

    let chute = document.querySelector('input').value;
    
    if (chute == numeroAleatorio){

       exibirTextoNaTela('h1', 'ACERTOU !!!');
       let palavraTetativas = tetativas > 1 ? ' tetativas '  : ' tentativa '; 
       let = mensagemTetativas = 'Você Descobriu O Numero com ' + tetativas + palavraTetativas;
       exibirTextoNaTela('p', mensagemTetativas);
       document.getElementById('reiniciar').removeAttribute('disabled');

    } else { 
     
    if (chute > numeroAleatorio){

        exibirTextoNaTela('h1', 'ERROU !!!'); 
        exibirTextoNaTela('p', 'O Numero Secreto é Menor');

    }else{
        
        exibirTextoNaTela('h1', 'ERROU !!!');  
        exibirTextoNaTela('p', 'O Numero Secreto é Maior'); 

    }

      tetativas++;
      limparCampo();

    }

}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo Do Adivinha' );
    exibirTextoNaTela('p', 'Chute De 1 a 10');
}



function iniciarJogo(){
    limparCampo();
    numeroAleatorio = gerarNumeroAleatorio();
    tetativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}