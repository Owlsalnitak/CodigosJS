function Banco(conta, saldo, tipo, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;

    //métodos
    mostrarSaldo = function SaldoValor(){
        console.log(this.saldo)
    }
    mostrardeposito = function deposito(valor = 50){
        console.log(this.saldo += valor);
    }
    mostarSaque = function saque(valor=50){
        console.log(this.saldo -= valor);
    }
    mostrarConta = function Numconta(){
        console.log(this.conta)
    }

}

var minhaconta = new Banco("2020", 100, "contacorrente",1)

