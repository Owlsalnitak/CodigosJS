function buscaLinear(array, elementoBuscado){
    for(let i=0; i< array.length; i++){
        if(array[i] === elementoBuscado){
            return i;
        }
    }
    return -1;
}

const listaNumeros = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

const indiceEncontrado = buscaLinear(listaNumeros, elementoProcurado);

if(indiceEncontrado !== -1){
    console.log(`O elemento ${elementoProcurado} foi encontrado no indie ${indiceEncontrado}` );
}else{
      console.log(`O elemento ${elementoProcurado} não foi encontrado na lista` );
}