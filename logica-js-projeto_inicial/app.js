alert("Seja bem vindo ao jogo do número secreto");
let numeroEscolhido = 100;
let numeroSecreto = parseInt(Math.random() * numeroEscolhido + 1); 
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a " + numeroEscolhido);
    if (chute == numeroSecreto) {
        break;
        
    }   else {
            if (chute > numeroSecreto){
                alert('O número secreto é menor que' + " " + chute);
            }   else{
                    alert('O número secreto é maior que' + " " +chute);
            }
            tentativas++;
        } 
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert ("Acertou, o numéro é: " + numeroSecreto + " " + 
"você chutou:" + " " + tentativas + " " + palavraTentativa);