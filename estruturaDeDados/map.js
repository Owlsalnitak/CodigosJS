const vetorA =[]
for(let i=0; i<10; i++){
    let inserir = Number(prompt('Digite o primeiro valor A: '));
        vetorA.push(inserir)
}

const vet = vetorA.map(elemt =>{
    if(elemt % 2 ==0){
       return elemt * 5
    }else{
        return elemt + 5
    }
})
console.log(vet)
