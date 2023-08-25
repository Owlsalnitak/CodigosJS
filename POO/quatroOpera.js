class Calculadora{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    get Adicao(){
        return this.adicao();
    }
    adicao(){
        return this.num1 + this.num2;
    }
    get Substr(){
        return this.subtra();
    }
    subtra(){
        return this.num1 - this.num2;
    }
    get Div(){
        return this.divisao();
    }
    divisao(){
        return this.num1 / this.num2;
    }
    get Multip(){
        return this.multi();
    }
    multi(){
        return this.num1 * this.num2
    }
}

const adc = new Calculadora(12, 2);
console.log('Adição é igual: ' + adc.Adicao)
console.log('Substração é igual: ' + adc.Substr)
console.log('Divisão é igual: ' + adc.Div)
console.log('Multiplicação é igual: ' + adc.Multip)
