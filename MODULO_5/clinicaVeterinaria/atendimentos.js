const atendimentos = [
    {
        id: 1,
        nome: "Thor",
        animal: "cachorro",
        nomeDono: "Asafe",
        whats: "16999999",
        email: "asafe.honorio@gmail.com",
        cep: "13560-070"
    },
    {
        id: 2,
        nome: "Pipoca",
        animal: "cachorro",
        nomeDono: "Neide",
        whats: "169999999",
        email: "neide.honorio@gmail.com",
        cep: "13560-060"
    },
    {
        id: 3,
        nome: "Luna",
        animal: "cachorro",
        nomeDono: "Amauri",
        whats: "169999999",
        email: "amauri.honorio@gmail.com",
        cep: "13560-060"
    }
];

async function buscarAtendimento(atendimentoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const atendimento = atendimentos.filter(atendimento => atendimento.id === atendimentoId);
            if (atendimento.length > 0) {
                resolve(atendimento);
            }
            else {
                reject("Atendimento não encontrado.");
            }
        }, 2000);
    });
}

module.exports = {
    buscarAtendimento
};