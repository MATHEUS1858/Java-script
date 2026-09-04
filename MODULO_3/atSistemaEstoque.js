/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Câmbio",100,"Prateleira 02"],
        [id, nome, quantidade, localização]
]

*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================
const estoque = [
    {
        id: 1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 01"
    },
    {
        id: 2,
        nome: "Pedal",
        quantidade: 5,
        localizacao: "Prateleira 02"
    },
    {
        id: 3,
        nome: "Câmbio",
        quantidade: 50,
        localizacao: "Prateleira 03"
    },
    {
        id: 4,
        nome: "Câmbio",
        quantidade: 100,
        localizacao: "Prateleira 02"
    }
];
        

// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS 
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {

    const novoProduto = {
        id: estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    };
    estoque.push(novoProduto);
    console.log("Produto adicionado com sucesso.");
}

// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() {
    for(const produto of estoque){
        console.log(
            `ID: ${produto.id} | ` +
            `Nome: ${produto.nome} | ` +
            `Quantidade: ${produto.quantidade} | ` +
            `Localização: ${produto.localizacao} | `
        );
    };  
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(idBuscado) {  
    for(const produto of estoque){
        if(produto.id === idBuscado){
            console.log("Produto encontrado.");

            console.log(
                `ID: ${produto.id} | ` +
                `Nome: ${produto.nome} | ` +
                `Quantidade: ${produto.quantidade} | ` +
                `Localização: ${produto.localizacao} | `
            );
            return produto;
        }
    }
    console.log("Produto não encontrado.");
}


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(idBuscado, novaQuantidade) {
    for(produto of estoque){
        if(produto.id === idBuscado){
            produto.quantidade = novaQuantidade;
            console.log("Quantidade atualizada.");
            return;
        }
    }
    console.log("Produto não encontrado.")
}


// ==========================================
// DELETAR PRODUTO
// ==========================================

function deletarProduto(){
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("Cadastrando Produto -----------");
cadastrarProduto("Motor", 13, "Prateleira 2");
console.log("Listando produtos -----------");
listarEstoque();
console.log("Encontrando produto por id -----------");
buscarProduto(5);
console.log("Atualizando a quantidade do produto -----------");
atualizarQuantidade(2, 20);
listarEstoque();