//#region teste de idade
const idade = 13;

if (idade >= 18) {
    console.log("Maior de idade");
}
//#endregion
//#region if e else
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
//#endregion
//nota com casa decimal muito grande
const nota = 6.9;
const notaArreada = Math.trunc(nota*100)/100;
console.log(notaArreada);

if (nota < 5) {
    console.log("Reprovado");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Recuperação")
}

//-----
const senha = 20;
const email ="ddddddd@gmail.com"
const ativo = true;

if (senha === 18 && email === "ddddddd@gmail.com" && ativo) {
    console.log("Usuário autorizado");
} else {
    console.log("Usuário autorizado");
}

//#region Switch case
const dia = 3;

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia não encontrado");
}
// Quando usar o switch case?
// - Quando temos muitas condições para verificar.
// - Quando temos uma variável que pode ter muitos valores diferentes.
// - Quando queremos deixar o código mais legível.

// Quando usar if/else?
// - Quando temos poucas condições para verificar.

//#endregion

//operador ternario
//abstração de if/else


// pode refazer com operador ternario

const mensagem = idade >=18 ? "Maior" : "Menor";
console.log(mensagem);

// Quando usar o operador ternário?
// - Quando temos uma condição simples.

//#region loops

//while; for

//while - enquanto for verdade

let contador = 1;

while(contador <= 6){
    console.log(contador);
    contador++;
}
//for - repetir até

//for(//iniciaçõa; condição; incremento)

for (let i = 1; i <= 5; i++){
    console.log(i);
}

//for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

for(const fruta of frutas){
    console.log(fruta);
}

//tradicional
for(let i=1; i < frutas.length; ++i){
    console.log(frutas[i]);
}
//#endregion