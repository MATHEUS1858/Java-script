const a = 63
const b = 142

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a !== b);
console.log(a === b);
console.log(a > b || a < b)
console.log(a > b && a < b)
console.log(!(a > b || a < b))

const idade = 16;
const matriculaAtiva = true;

const podeComprar = idade >= 18 || matriculaAtiva;

console.log(podeComprar);

let numero = 4
console.log(numero++);
console.log(numero);
console.log(++numero);

console.log(numero--);
console.log(numero);
console.log(--numero);

const x = 5;
const y = 10;
const resultado = x < y

console.log(10 == "10");
console.log(10 === "10");

const dataNascimento = new Date("2009-04-13");
const ativo = true;

const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar)