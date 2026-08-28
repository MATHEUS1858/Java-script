/*
    const name = [] array
    const nome = {} objeto
    const array_de_obj = [{}, {}, {}] mais comum
    const obj_de_obj = {{}, {}, {}} pode ser utilizado também
*/

//Construindo um objeto

const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 2009,
    cadastroAtivo: true,
    email: null,
    hobbies: ["bola", "ler", "xadrez"],
    endereco: {
        rua: "Rua 35, 303",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 1302492
    }
};
//console.log(aluno);

//Acessando as propriedades do objeto

console.log(aluno.nome);

//regra: se o cadastro for = true, msg = seja bem-vinde ao nosso sistema.

if (aluno.cadastroAtivo === true) {
    console.log("Bem-vinde ao nosso sistema.")
}

aluno.idade = 18;

console.log(aluno.idade);

//alterar cadastroAtivo e bairro

aluno.cadastroAtivo = false;
aluno.bairro = "Bairro flores bela";

console.log(aluno.cadastroAtivo);
console.log(aluno.bairro);

delete aluno.email;
console.log(aluno);

const { nome, idade, RM } = aluno;
console.log(nome);

//spread operator ... como espalhar

const dadosFamilia= {
    nomeMae: "Neide Honório",
    nomePai: "Amauri Honório",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);

//Dados iniciais
const dadosPessoais = {
    nome: 'Guilherme',
    matricula: '20260828',
    curso: 'Análise e Desenvolvimento de Sistemas'
};

const dadosContato = {
    email: 'guilherme@email.com',
    telefone: '(11) 99999-9999'
};

const perfilCompleto = {
    ...dadosContato,
    ...dadosPessoais
};
console.log("Destructuring " + perfilCompleto + " end");

const perfilAtualizado = {
    ...dadosPessoais,
    status: "Matriculado"
};
perfilAtualizado.curso = "Engenharia de Software";
console.log(perfilAtualizado);

//Object.keys, Object.values e Object.entries
//chaves do objetos
console.log(Object.keys(aluno));

console.log("----");
//valores do objeto
console.log(Object.values(aluno));

console.log("----");
//relação chave <---> e valor
console.log(Object.entries(aluno));

//objetos x JSON

//objeto passando para JSON
const json = JSON.stringify(aluno);
console.log(json);

//JSON passando para objeto
const objeto = JSON.parse(json);
console.log(objeto);