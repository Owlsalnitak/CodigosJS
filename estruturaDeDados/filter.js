const vetorA =[]

for(let i=0; i<5; i++){
    let inserir = Number(prompt('Digite o primeiro valor A: '));
        vetorA.push(inserir)
}

const somatorio = vetorA.reduce((elemt, valor)=>{
    if(elemt % 2 ==0){
       return 0
    }else{
        return  elemt + valor.vetorA
    }
})
console.log(somatorio)
