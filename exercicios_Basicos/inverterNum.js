let num = Number(prompt('Digite um numero:'))

function inverteNum(num) {
    var inverso = 0;
    while(num != 0)
    {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Math.trunc(num/10); // Remover casas decimais
    }
    return inverso;
}
console.log(inverteNum(num))