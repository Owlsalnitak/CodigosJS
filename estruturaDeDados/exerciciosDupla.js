const numeros = [0,1,2,3,4,5]

numeros.forEach(numero =>{
    if(numero % 2 ==0){
        console.log(numero + ' é par!')
    }else{
        console.log(numero + ' é impar!');
    }
})

/*------------------------------------------------- */

let numer = [1,2,3,4]

const numAlteradoss = nums.map(num =>{
    return num * 2;
});

console.log(numAlterados)

/*---------------------------------------------------- */

let nums = [5,7,9,10]

const numAlterados = nums.map(num =>{
    return num * num;
});

console.log(numAlterados)

/*---------------------------------------------------------- */

const tarantinoMovies = [
    {name: "Bastardos inglórios", release: 2009},
    {name: "Pulp Fiction", release: 1994},
    {name: "Kill Bill: Volume 2", release: 2004},
    {name: "Quatro Quartos", release: 1995},
    {name: "Sin City", release: 2005},
    {name: "Era uma Vez em... Hollywood", release: 2019},
    {name: "Django Livre", release: 2012},
    {name: "Cães de aluguel", release: 1992},
    {name: "À Prova de Morte", release: 2007},
    {name: "Kill Bill: Volume 1", release: 2003},
    ]
const anosLanc = tarantinoMovies.filter(filme=>{ 
    return  filme.release < 2000
}) 
console.log(anosLanc)

/*------------------------------------------------------------------ */

const empresas = [
    {nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    {nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    {nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    {nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
                ];
    const anosLancc = empresas.filter(empresa =>{ 
        return  empresa.anoDeCriacao > 2000
    }) 
    const nomeEmpresa = empresas.map(ceos =>{ 
        return   `Nome da empresa: ${ceos.nome} `+ ',' + 'CEO da empresa:' + `${ceos.CEO}`
    }) 
    
    const somatorio = empresas.reduce((soma, quantidade) =>{
        return (soma + quantidade.valorDeMercado)
    },0)
    console.log('Valor de Mercado de todas as empresas: ' + somatorio)


    /*------------------------------------------------------------------------------ */

    let pedidos = [
        {"id": 420, "nome":"Dener", "alimento:": "Sandubão de Bacon", "bebida": "Suco Limão"},
        {"id": 152, "nome":"Naiady", "alimento:": "Sandubão Vegano", "bebida": "Suco Laranja"},
        {"id": 29, "nome":"Marcio", "alimento:": "Coxinha", "bebida": "Suco Uva"},
        {"id": 33, "nome":"Isabel", "alimento:": "Sandubão de Picanha", "bebida": "Refrigerante"},
        {"id": 55, "nome":"José", "alimento:": "Pizza", "bebida": "Refrigerante"},
        ]
    const pedido = pedidos.find(pedido =>{
        return pedido.id === 33
        
    })
    console.log(pedido)
     

