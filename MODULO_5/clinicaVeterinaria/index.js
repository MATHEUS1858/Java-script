const fs = require("fs/promises");
const { buscarAtendimento } = require("./atendimentos");
const { buscarServico } = require("./servicos");

async function calcularTotal(id) {
    try {
        console.log("Buscando Atendimento...");
        const atendimento = await buscarAtendimento(id);
        console.log(atendimento);

        console.log("Buscando Serviço...");
        const servico = await buscarServico(id);
        console.log(servico);

    }
    catch (erro) {
        console.error("Erro ao fechar a conta", erro);
    }
}

calcularTotal(2)