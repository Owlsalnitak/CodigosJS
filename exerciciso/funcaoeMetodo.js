var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    homem: true,
    
    /*function: latir (){
        if(this.homem = true){
          console.log('Latir!')
    }
   }*/
    mostrarDados:()=>{
        console.log('Raça do cachorro, '+ cachorro.raca + ' cor do cachorro, ' + cachorro.cor + ' sua idade, '+ cachorro.idade + latir())
    }
}
cachorro.mostrarDados()
