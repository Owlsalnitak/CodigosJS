let pessoa={
    nome: 'Maria',
    idade: 21,
    profisao: 'Desenvolvedora',
    cidade: 'Petrolina'
};

for(const caracteristicas in pessoa){
    console.log(`${caracteristicas}: ${pessoa[caracteristicas]}`);
}

