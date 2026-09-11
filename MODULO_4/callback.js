//Callback

/**
 * Se vc pedir uma operação que demora muito o node não precisa esperar parado
 */

//Callback é uma função passada para outra função para ser executada posteriormente

function processarUsuarioGerson(nome, callback) {
    console.log("Processando " + nome);
    callback();
}

processarUsuarioGerson("Ri Ana", () => {
    console.log("Usuário processado");
});

//=================================

function buscarUsuarioGerson(callback) {
    //simulação de tempo
    setTimeout(() => {
        const usuario = {
            //construindo objeto
            id: 1,
            nome: "Rihanna"
        };
        callback(usuario)
    }, 2000)
}

console.log("Início da chamada");

buscarUsuarioGerson((usuario) => {
    console.log(usuario)
});

console.log("Fim do processo");

//Problema do callback
/*
numeros = [1, 2, 3, 4, 5, 6, 80];

numeros.forEach((numero) => {
    console.log(numero);
});

// Callback
(numero) => {
    console.log(numero);
*/

//promises - é uma promessa de que teremos resultado no futuro

//Criando uma promise

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso) {
        resolve("Tudo certo!!");
    }
    else {
        reject("Deu errado!!");
    }
});

//consumir a promise

promessa
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((erro) => {
        console.log(erro)
    });