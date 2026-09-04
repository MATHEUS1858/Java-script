//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexiriaca"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/

frutas.push("Morango");
frutas.unshift("Abacaxi");
console.log(frutas)

//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante
nomes.forEach((nome) => {
    console.log("Olá, " + nome);
});

//#endregion

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const precosDivididos = precos.map((preco) => {
    return preco * 1.10;
});
console.log(precosDivididos);

//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.
const maioresQue20 = numeros.filter((numero) => {
    return numero > 20;
});
console.log(maioresQue20);

//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const numero = listaNumeros.find(numero => numero >= 20);
console.log(numero);

//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 
const maiorDeIdade = idades.some(idade => idade > 18);
console.log(maiorDeIdade);
//every
const maioresDeIdade = idades.every(idade => idade > 0);
console.log(maioresDeIdade);
//Usando o array acimima codifique respondendo: Todos são maiores de idade?

//#endregion

//#region reduce

const valores = [100, 200, 50, 150];

//Calcule o valor total.
const valorTotal = valores.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(valorTotal);
//#endregion