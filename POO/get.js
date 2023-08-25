class Pessoa{
    constructor(nome, idade,sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo; 
    }
    apresentar(){
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Sexo: " + this.sexo)
    }
}

const pess = new Pessoa("Dayane", 21,"Feminino")
pess.apresentar();


let mostrar ={
    nome: 'Maria',
    idade: 21,
    sexo: 'Feminino',
    getNome: function(){
     console.log('Nome: ' + this.nome)
},
    getIdade: function(){
     console.log('Idade: ' + this.idade)
},
    getSexo: function(){
     console.log('Sexo: ' + this.sexo)
}
}
mostrar.getNome()
mostrar.getIdade()
mostrar.getSexo()