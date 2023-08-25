var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    mostrarDados:()=>{
        console.log('Preço do carro: '+ carro.preco + ' número de portas ' + carro.portas + ' marcar: '+ carro.marca)
        
    }
}
carro.preco = '3000'
carro.mostrarDados()
