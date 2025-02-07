let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {

  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Pense em um número entre 1 e 100');
}

  exibirMensagemInicial();

 function verificarChute() {
   let chute = document.querySelector('input').value;

  if(chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    if(chute > numeroSecreto){
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else{
      exibirTextoNaTela('p', 'O número secreto é maior!');
    };
    tentativas++;
    limparCampo();
  };
};

function numeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;  // length: verifica o tamanho da lista;
  
  if(quantidadeDeElementosNaLista == numeroMaximo){
    listaDeNumerosSorteados = [];
  }
  
  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {  // 
    return numeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);                           // push: adiciona item ao final da lista;
    return numeroEscolhido;                                        // pop: remove o ultimo elemento da lista;
  }
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {

  numeroSecreto = numeroAleatorio();

  limparCampo();

  tentativas = 1;

  exibirMensagemInicial();

  document.getElementById('reiniciar').setAttribute('disabled', true);

}