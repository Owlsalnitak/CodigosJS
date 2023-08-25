const votacao={
    candidato_X :0,
    candidato_Y : 0,
    candidato_Z : 0,
    branco : 0
    }
    
    console.log(votacao)
    let maior =0;
    let numNulo =0;
    for(var i=0; i<=3; i++){
        let voto = Number(prompt('Digite seu voto: '))
        if(voto = '889'){
            votacao.candidato_X += votacao.candidato_X
        }else if(voto = '847'){
            votacao.candidato_Y += votacao.candidato_Y
        }else if(voto = '515'){
            votacao.candidato_Z += votacao.candidato_Z
        }else if(voto = '0'){
            votacao.branco += votacao.branco
        }else{
            console.log('Número nulo!' + numNulo + 1)
         }
        if(voto > maior){
            maior += voto
            console.log('Candidato Vencedor: ' + maior)
        }
    }

console.log('Candidado Vencedor: ' + maior)
console.log('Candidato X' + votacao.candidato_X)
console.log('Candidato Y' + votacao.candidato_Y)
console.log('Candidato Z' + votacao.candidato_Z)
console.log('Branco' + votacao.branco)


    