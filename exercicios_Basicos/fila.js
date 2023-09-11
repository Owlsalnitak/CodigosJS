const fila =[];

function enfileirar(element){
    fila.push(element);
}
enfileirar(10)
enfileirar(20)
enfileirar(30)

console.log(fila)

/*---------------------------------------------------*/

const filaa =[10,20,30];

function desenfileirar(){
    if(estaVazia()){
        return null;
    }
    return filaa[0];
}
function tamanho(){
    return filaa.length;
}


console.log('Tamanho:', tamanho());

/*---------------------------------------------------*/

const filas = [40, 50, 60, 80]

function estaVazia(){
    return fila.length == 0;
}

console.log('Fila está vazia', estaVazia());

/*---------------------------------------------------*/

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Exemplo de uso da fila
  const minhaFila = new Queue();
  minhaFila.enqueue(10);
  minhaFila.enqueue(20);
  minhaFila.enqueue(30);
  
  console.log(minhaFila.dequeue()); // Saída: 10
  console.log(minhaFila.size()); // Saída: 2
  console.log(minhaFila.front()); // Saída: 20
  