
let nota1 = Number(prompt('Digite sua primeira nota: '))
let nota2 = Number(prompt('Digite sua segunda nota: '))

const media = (nota1 + nota2)/2
const rest = 7 - media

if(media >= 7){
    console.log("Aluno Aprovado!")
}else{
   
    console.log("Aluno reprovado! Você precisa de: " + rest + " para passar de ano!")
}