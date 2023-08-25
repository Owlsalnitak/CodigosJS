class Roupa {
    constructor(nome, tamanho, preco) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.preco = preco;
    }
}

class LojaDeRoupas {
    constructor() {
        this.estoque = [];
    }

    cadastrarRoupa(nome, tamanho, preco) {
        const novaRoupa = new Roupa(nome, tamanho, preco);
        this.estoque.push(novaRoupa);
        console.log(`${nome} cadastrado(a) no estoque.`);
    }

    excluirRoupa(nome) {
        const index = this.estoque.findIndex(roupa => roupa.nome === nome);
        if (index !== -1) {
            this.estoque.splice(index, 1);
            console.log(`${nome} removido(a) do estoque.`);
        } else {
            console.log(`${nome} não encontrado(a) no estoque.`);
        }
    }

    mostrarEstoque() {
        if (this.estoque.length === 0) {
            console.log("O estoque está vazio.");
        } else {
            console.log("Estoque:");
            this.estoque.forEach(roupa => {
                console.log(`Nome: ${roupa.nome}, Tamanho: ${roupa.tamanho}, Preço: ${roupa.preco}`);
            });
        }
    }
}

const minhaLoja = new LojaDeRoupas();

minhaLoja.cadastrarRoupa("Camiseta", "M", 29.99);
minhaLoja.cadastrarRoupa("Calça Jeans", "42", 59.99);
minhaLoja.cadastrarRoupa("Vestido", "P", 79.99);

minhaLoja.mostrarEstoque();

minhaLoja.excluirRoupa("Calça Jeans");

minhaLoja.mostrarEstoque();
