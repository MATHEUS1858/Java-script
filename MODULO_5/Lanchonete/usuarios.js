//Construiu obj com usuário
const usuarios = [
    {
        id: 1,
        nome: "Asafe",
        whats: "16999999",
        email: "asafe.honorio@gmail.com",
        cep: "13560-070"
    },
    {
        id: 2,
        nome: "Neide",
        whats: "169999999",
        email: "neide.honorio@gmail.com",
        cep: "13560-060"
    },
    {
        id: 3,
        nome: "Amauri",
        whats: "169999999",
        email: "amauri.honorio@gmail.com",
        cep: "13560-060"
    }
];

//Função buscarUsuário
async function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find(usuario => usuario.id === id);
            if (usuario) {
                resolve(usuario);
            }
            else {
                reject("Usuário não encontrado");
            }
        }, 1000);
    });
}

//tranformando em módulo
module.exports = {
    buscarUsuario
};