const vetorA =[]

for(let i=0; i<3; i++){
    let inserir = Number(prompt('Digite o primeiro valor A: '));
        vetorA.push(inserir)
}

const vetorB = vetorA.map((item, indice, array)=>{
     return array[array.length - indice - 1];
})
console.log(vetorA)
console.log(vetorB)
