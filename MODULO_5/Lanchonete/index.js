//exports e imports
const fs = require("fs/promises");
const { buscarUsuario } = require("./usuarios");
const { buscarProduto } = require("./produtos");
const { buscarPedidos } = require("./pedidos");
//função
async function fecharConta(usuarioId) {
    try {
        //Usuário
        console.log("Buscando Usuario...");
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario);

        //Pedido
        console.log("Buscando Pedido...");
        const pedidos = await buscarPedidos(usuarioId);
        //Total geral
        let totalGeral = 0;

        //Array para os itens
        const itensConta = [];

        //varrer os pedidos para ver se tem pedidos do cliente
        //varrer os itens(produtos) e add(push) os itens no itens conta
        //estrutura da comanda
        for (const pedido of pedidos) {
            const produto = await buscarProduto(pedido.produtoId);
            const subTotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subTotal: subTotal
            });
            totalGeral += subTotal;
        }

        //Construir nosso arquivo
        const comanda = {
            estabelecimento: "McGerson",
            cliente: {
                id: usuario.id,
                nome: usuario.nome
            },
            itens: itensConta,
            totalPagar: totalGeral
        }
        await fs.writeFile("comandaCliente.json", JSON.stringify(comanda, null, 2), "utf-8");
    }
    catch (erro) {
        console.error("Erro ao fechar a conta", erro)
    }
}

fecharConta(1);