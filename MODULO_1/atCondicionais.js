//#region atividades

// Atividade 1 — Maioridade - Crie uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

//Atividade 5 — Contador - Crie uma algoritmo com "for" para imprimir 
// todos os numeros pares de 1 a 100.

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.

//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 

//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/

//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/

//#endregion

//#region Atividade 1 — Maioridade
const idade = 18

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
//#endregion
//#region Atividade 2 — Aprovação
const nota = 7;

if (nota >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

switch(nota){
    case 6:
        console.log("Reprovado");
        break;
    case 7:
        console.log("Aprovado");
        break;
}
//#endregion
//#region Atividade 3 - Login
const senha = "Gerson Nunes";
const email ="GersonHonório@gmail.com"
const ativo = true;

if (senha === 1334 && email === "GersonHonório@gmail.com" && ativo) {
    console.log("Usuário autorizado");
} else {
    console.log("Usuário não autorizado");
}
//#endregion
//#region Atividade 4 - Status do pedido
let statusPedido = 5;

switch(statusPedido){
    case 1:
        console.log("pendente");
        break;
    case 2:
        console.log("pago");
        break;
    case 3:
        console.log("enviado");
        break;
    case 4:
        console.log("processando");
        break;
    case 5:
        console.log("entregue");
        break;
    case 6:
        console.log("concluído")
        break;
}
//#endregion
//#region Atividade 5 - Contador
for (let i = 1; i <= 50; i++){
    console.log(i * 2);
}
//#endregion
//#region Atividade 6 - Refaça o exercicio 5 agora usando for...of e while
let numbers = [1];
for (let number of numbers){
    console.log(number + 2)
}
while (numbers <= 49){
    numbers++
    console.log(numbers * 2)
}
//#endregion
//#region Ativide 7 - Crie um array com 10 nomes e exiba cada um dele usando for...of
const nomes = ["Murilo", "Beatriz", "Thiago", "Camila", "Renato", "Larissa", "Gustavo", "Letícia", "Bruno", "Amanda"];

for (nome of nomes){
    console.log(nome)
}
//#endregion
//#region Atividade 8
//#endregion
//#region Atividade 10 - Desafio do backend
const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

for(let i = 0; i < pedidos.lenght; i++){
    if(pedidos[i].pago === true){
        console.log(pedidos[i])
    }
}

for(let pedido of pedidos){
    if(pedido.pago === true){
        console.log(pedido)
    }
}