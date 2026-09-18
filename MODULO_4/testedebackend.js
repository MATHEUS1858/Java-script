//Simulação
//Função auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));


//BuscarUsuario

async function buscarUsuario(id) {
    await esperar(2000);

    return {
        id: 1,
        nome: "Robyn Rihanna Oliveira",
        email: "riri@email.com"
    }
}

//Função buscarPedidos

async function buscarPedidos(usuarioId) {
    await esperar(3000);

    const todosOsPedidos = [
        { id: 1, produto: "X-Tudo" },
        { id: 2, produto: "Coca-Cola" },
        { id: 3, produto: "X-Catupiry" }
    ];

    return todosOsPedidos.filter(pedido => pedido.id === usuarioId);
}

//Função excutar

async function exectar() {
    try {
        console("Iniciando simulação");
        console.log("Buscando Usuário...");
        const usuario = await buscarUsuario();
        console.log("Usuário encontrado", usuario.id);
        //Buscar pedidos
        console.log("Buscando pedidos...", usuario.id);
        const pedidos = await buscarPedidos(usuario.id);
        console.log("O pedido encontrado foi:", pedidos);
    }
    catch (erro) {
        console.log("Deu errado");
    }
}

exectar();