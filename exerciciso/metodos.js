var pessoa = {
    nome: 'Dayane',
    idade: 21,
    sexo: 'Feminino',
    endereco:  'Rua 17 - Jardim Petropolis',
    mostrarDados:()=>{
        console.log('Meu nome é ' + pessoa.nome + ' tenho '+ pessoa.idade + ' anos' + ' meu sexo é ' + pessoa.sexo + ' moro no endereço: ' + pessoa.endereco)
        
    }
}
pessoa.mostrarDados()
