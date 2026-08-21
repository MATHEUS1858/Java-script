function quandoClicarNoBotao(){
    console.log("Obrigado por comprar em nossa loja");
}
//invocação da função
quandoClicarNoBotao();

function exibirMensagem(){
    console.log("Bebam água");
}

exibirMensagem();

//Mais simples de tudo (parametros)
//--------------------------------------
 
function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}
//Reutilizavel

function somar(numero1, numero2){
    return numero1 + numero2;
}

const resultado = somar(4, 9);
if (resultado >= 11){
    console.log("O Senai faz massa");
}
else{
    console.log("Ainda assim faz massa")
}

/*
    console.log() é como mostrar o resultado em uma tela.

    return é como entregar o resultado para outra parte do programa utilizar.
*/

//Declarar constantes
const valor = 400;
const desconto = 20;
//Constante com calculo do valorFinal
const valorFinal = calcularDesconto(valor, desconto);

//Chamas das funções

//Funções

function calcularDesconto(valor, desconto){
    return(valor - desconto);
}

//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}

//Valor final com desconto
console.log(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

//Regra CashBack
function cashBack(valorFinal){
    if(valorFinal > 50){
    const cashBack = valorFinal * 0.10;
    console.log("O valor do CashBack é: " + cashBack);
    }
}

/*
    Regra de parcelamento
    R$ 100 parcela já começa a parcelar tem juros de 2% do total
    
    Para ser sem juros acima de 399

    o limite é de 6 parcelas.

*/

function parcelamento(valorFinal){
    if (valorFinal > 399){
        // Compras acima 399: sem juros
        const valorParcelado = valorFinal / 6;
        console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado);

    } else if (valorFinal >= 100){
        // Compras entre 100 e 399: com 2% de juros no total
        const valorParcelado = (valorFinal * 1.02) / 6;
        console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado);

    } else{
        // Compras abaixo de 100: não parcela
        console.log("O valor não atingt o mínimo de R$ 100 esperado para o parcelamento.");
    }
}

