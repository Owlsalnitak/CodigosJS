const pilha = []

function empilhar(elemento){
    pilha.push(elemento);
}

empilhar(10)
empilhar('Day')

console.log(pilha)

/*--------------------------------------------- */

/*REMOVER ELEMENTO DA PILHA*/

const pilhaa = []

function desempilhar(){
    if(estaVazia){
        return null;
    }
    return pilha.pop();
}

desempilhar(10)
console.log(pilha)
