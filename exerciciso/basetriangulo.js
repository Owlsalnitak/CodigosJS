let base = Number(prompt('Digite um numero da base do triangulo:'))
let altura = Number(prompt('Digite um numero da altura do triangulo:'))


function triangulo(base, altura) {
   return base * altura/2
}
console.log(triangulo(base, altura))