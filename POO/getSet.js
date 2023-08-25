let pessoa ={
    nome: 'Dayane',
    getNome: function(){
        console.log('Nome é: ' + this.nome)
    },
    setNome: function(novoNome){
        this.nome = novoNome;
        
    }
}
pessoa.getNome();
pessoa.setNome('Teste')
pessoa.getNome()