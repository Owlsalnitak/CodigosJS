let capInic = Number(prompt('Digite o capital de inicio: '))
let tempDeInvest = Number(prompt('Digite o tempo de investimento (EM MESES): '))

function montante(capInic, tempDeInvest) {
    var mont
    var i = 0.2
    mont = (capInic * (1 + i) ** tempDeInvest)
   return mont
}
console.log(montante(capInic, tempDeInvest))