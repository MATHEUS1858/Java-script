// Strings
 const nome = "Cenoura";
 const cidade = "Santa Rita do Passa Quatro";
 const idade = 16;
 const possuiTatuagem = false;
//

// Forma 1 - interpolação de string
console.log(`O nome dele é ${nome} ele mora em ${cidade} e ele tem ${idade} anos.`);

// Forma 2 - concatenação de string
console.log("O nome dele é " + nome + " ele mora em " + cidade + " e ele tem " + idade + " anos.");

const altura = 1.75;
const temperatura = -10;
console.log(typeof altura);
console.log(typeof temperatura);

//Boolean
let maiorDeIdade;
const dade = 17;

if (dade >= 18) {
    maiorDeIdade = true;
    console.log("Maior de idade");
    console.log(dade)
}
else {
console.log("Menor de idade")
maiorDeIdade = false
console.log(dade)
}

//Undefined e null

let name;

console.log(name);

let usuario = null;
console.log(usuario)
console.log(typeof usuario)