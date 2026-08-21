//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!

function mensagem(saudacao, nome){
    return saudacao + nome;
}

const saudacao = mensagem("Olá,", " Matheus!");

console.log(saudacao);

//----------------------------------------------------------------------

//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.

function somar(numero1, numero2){
    return numero1 + numero2;
}

function subtrair(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

console.log(somar(8, 3));
console.log(subtrair(8, 3));
console.log(multiplicar(8, 3));
//----------------------------------------------------------------------

//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade

function verificacao(idade){
    return idade;
}

const idade = verificacao(16);

if (idade > 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//----------------------------------------------------------------------

//Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/

const calcularDobro = (numero) => {
    return numero * 2;
}

console.log(calcularDobro(9));

//----------------------------------------------------------------------
