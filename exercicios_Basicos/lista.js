/*INSERIR ELEMENTO NA LISTA */
const lista = [];

function inserir(elemento, posicao = lista.length){
    if(posicao >= 0 && posicao <= lista.length){
        lista.splice(posicao, 0, elemento);
        return true;
    }else{
        return false;
    }
}

inserir(30)
inserir(10,0)
inserir(20,1)

console.log(lista)

/*REMOVER ELEMENTO DA LISTA */

const listaa = [40,50,60];

function remover(elemento){
    const indice = listaa.indexOf(elemento) /*indexOf = buscar elemento dentro da lista*/
    if(indice !== -1){
        listaa.splice(indice, 1);
        return true;
    }else{
        return false;
    }
}

remover(40)

console.log(listaa)