//Construir um array de produtos
const produtos = [
    {
        id: 1,
        nome: "Batata Frita",
        preco: 12
    },
    {
        id: 2,
        nome: "Refrigerante",
        preco: 22
    },
    {
        id: 3,
        nome: "Big Mc",
        preco: 23
    },
    {
        id: 4,
        nome: "Top Sunday",
        preco: 17
    },
    {
        id: 5,
        nome: "Quarteirão",
        preco: 18
    }
]
//Fazer uma função buscarProdutos
async function buscarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const produto = produtos.find((produto) => produto.id === id);
            if (produto) {
                resolve(produto);
            }
            else {
                reject("Produto não encontrado");
            }
        }, 1000);
    });
}

//Module para exportar
module.exports = {
    buscarProduto
};