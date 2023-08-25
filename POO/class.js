class matriculados{
    constructor(matricula, nome, nota1, nota2, notaTrabal){
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabal = notaTrabal
    }
     med ={
        media(){
             return (this.nota1 + this.nota2 +  this.notaTrabal)/3;
        }
    }
     NotaFinal ={
        final(){
            if(med.media < 7){
                
            }else{
                return 0;
            }
        }
    }
}