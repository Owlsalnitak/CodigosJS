const estudantes = [
    {nome: "José", nota: 5.7},
    {nome: "Maria", nota: 4.8},
    {nome: "Paula", nota: 7.5},
    {nome: "Eustaquio", nota: 6.7},
]
    
const media = estudantes.reduce((total, soma)=>{
    return total + soma.nota / 4
},0)
console.log(media)