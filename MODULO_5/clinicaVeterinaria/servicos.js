const servicos= [
    {id: 1, servico: "Tosa", preco: 30},
    {id: 2, servico: "Banho", preco: 20},
    {id: 3, servico: "Vacina Antirrábica", preco: 80}
];

async function buscarServico(servicoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const servico = servicos.find((servico) => servico.id === servicoId);
            if (servico) {
                resolve(servico);
            }
            else {
                reject("Servico não encontrado");
            }
        }, 1000);
    });
}

module.exports = {
    buscarServico
};