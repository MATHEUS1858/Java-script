const servicos= [
    {
        id: 1,
        nome: "Thor",
        servico: "Tosa",
        preco: 30
    },
    {
        id: 2,
        nome: "Pipoca",
        servico: "Banho",
        preco: 20
    },
    {
        id: 3,
        nome: "Luna",
        servico: "Vacina Antirrábica",
        preco: 80
    }
];

async function buscarServico(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const servico = servicos.find((servico) => servico.id === id);
            if (servico) {
                resolve(servico);
            }
            else {
                reject("Servico não encontrado");
            }
        }, 1000);
    });
}