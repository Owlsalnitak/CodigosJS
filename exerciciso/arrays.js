let nomes = ['Pedro', 'Ana', 'Maria', 'Joana', 'Dayane', 'José','Alice', 'Carla','Jessica','Luiza']
let idades =[20, 18, 15, 8, 6, 45, 26, 12, 40, 21]
let coresFav = ['Azul', 'Cinza', 'Branco', 'Preto', 'Verde', 'Amarelo','Ciano', 'Laranja','Vermelho','Rosa']


nomes.splice(1, 'Pedro','Carlos')
console.log(nomes)

idades.splice(4, 6, 'Vinte cinco')
console.log(idades)

coresFav.splice(9, 'Rosa', 'Roxo')
console.log(coresFav)