//const frutas = ["maçã", "banana", "laranja", "uva"];

//Acessando elementos do array
//console.log(frutas[3]);

//Contando elementos do array
//console.log(frutas.length);

//Acessando o ultimo elemento do array
//console.log(frutas[frutas.length - 1]);

//Alterando elementos da array
//frutas[1] = "Morango";
//console.log(frutas);

//Colocando no início do array
//frutas.push("morango");
//console.log(frutas);

//Colocando no início
//frutas.unshift("manga");
//console.log(frutas);

//Deleta do início do array
//frutas.pop();
//console.log(frutas);

//const itemRemovendo = frutas.pop();
//console.log(itemRemovendo);

//Varrendo o array
//for (const fruta of frutas) {
    //console.log(fruta);
    //return fruta;  //Relembrando
//}

//forEach executa uma função para cada elemento do array.
//Eles fazem algo semelhante, mas forEach é específico para percorrer
//uma coleção e executar uma ação para cada elemento.
frutas.forEach((fruta) => {
    console.log(fruta);
});

//frutas.forEach((fruta) => {
    //const nomeFrutaPrimeiraMaiuscula =
    //fruta.charAt(0).toUpperCase() + fruta.slice(1);
    //console.log(nomeFrutaPrimeiraMaiuscula);
//});

//const numeros = [1, 2, 3, 4, 5, 6];

//Map - cria um novo array com os elementos modificados 
//const numerosDobrados = numeros.map((numero) => {
    //return numero + 2;
//});
//console.log(numerosDobrados);

//Filter - cria um novo array com os elementos que atendem a uma condição
//const maioresQue3 = numeros.filter((numero) => {
    //return numero > 3;
//});
//console.log(maioresQue3);

/*
  |  Método   |                  Pergunta                |
  | --------- | ---------------------------------------- |
  |  forEach  |   O que quero fazer com cada elemento?   |
  |  map      |   Como quero transformar cada elemento?  |
  |  filter   |   Quai elementos quero manter?           |

*/

/*
Filter x find
    filter
    -> retorna vários elementos

    find
    -> retorna o primeiro elemento   
*/

//Não é tanto usado no dia a dia, mas é bom saber que existe.
//Some - verifica se pelo menos um elemento atende a uma candição
//Retorna true ou false (boolean)
//const existeMaiorQue5 = numeros.some(n => n > 5);
//console.log(existeMaiorQue5);

//Every - verifica se todos os elementos atendem a uma condição
//Retorna true ou false (boolean)
//const todosMaioresQue0 = numeros.every(n => n > 0);
//console.log(todosMaioresQue0);

//Reduce - reduz o array a um único valor,
//Aplicando uma função a cada elemento
//const soma = numeros.reduce((total, numero) => {
    //return total + numero;
//}, 0);
//console.log(soma);


const produtos = [
    { nome: "Produto 1", disponivel: true},
    { nome: "Produto 2", disponivel: false},
    { nome: "Produto 3", disponivel: true},
    { nome: "Produto 4", disponivel: true}
];

//for of

console.log("========== Com for...of ==========");

const produtosDisponiveis = [];

for(const produto of produtos) {
    if(produto.disponivel){
        produtosDisponiveis.push(produto.nome);
    }
}
console.log(produtosDisponiveis);

//map e filter
console.log("========== Com map e filter ==========");

const prodDisponiveisMap = produtos
.filter((produto) => produto.disponivel)
.map((produto) => produto.nome);

console.log(prodDisponiveisMap);