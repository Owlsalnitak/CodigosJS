let salario = Number(prompt('Digite seu salario:'))

if(salario == 280){
    console.log('Valor do salario antes do reajuste: ' + salario)
    console.log('Percentual aumentado de 20%')
    console.log('Valor aumentado: ' + 1500*0.2)
   console.log('Salario atual após o rejuste: ' + (salario + (1500 * 0.2)))
}if(salario >= 280 & 700){
    console.log('Valor do salario antes do reajuste: ' + salario)
    console.log('Percentual aumentado de 15%')
    console.log('Valor aumentado: ' + 1500*0.15)
    console.log('Salario atual após o rejuste: ' + (salario + (1500 * 0.15)))
}if(salario >= 700 & 1500){
    console.log('Valor do salario antes do reajuste: ' + salario)
    console.log('Percentual aumentado de 10%')
    console.log('Valor aumentado: ' + 1500*0.1)
    console.log('Salario atual após o rejuste: ' + (salario + (1500 * 0.1)))
}if(salario >= 1500){
    console.log('Valor do salario antes do reajuste: ' + salario)
    console.log('Percentual aumentado de 5%')
    console.log('Valor aumentado: ' + 1500*0.05)
    console.log('Salario atual após o rejuste: ' + (salario + (1500 * 0.05)))
}