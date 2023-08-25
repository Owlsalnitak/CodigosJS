let nome = String(prompt('Digite seu nome completo: '));
let anodenascim = Number(prompt('Digite seu ano de nascimento: '))
let idade = 2023 - anodenascim;


try {
    if(anodenascim >= 1991 & 2023){
    console.log(nome + ',' + 'sua idade é: ' + idade)
    }else{
        throw new Error('Insira um ano válido, entre 1991 e 2023')
    }
}catch(error){
    console.log(error);
    console.log('Digite outro valor!')
}
    