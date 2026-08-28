//Atividade 1 - Sistema de aluno
const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

//1 - Motrar: Nome, Idade, Curso, Cidade, Estado
console.log(aluno.nome, aluno.idade, aluno.curso, aluno.endereco);

//2 - Alterar a cidade
aluno.endereco.cidade = "Santa Rita do Passa Quatro";
console.log(aluno.endereco);

//3 - Adicionar email
aluno.email = "carlos@email.com" ;
console.log(aluno);

//4 - Use o destructuring de alguma forma
const alunoCompleto = {
    ...aluno
};
console.log(alunoCompleto);

//5 - Criar uma cópia utilizando spread para alunoAtualizado
const alunoAtualizado = {...aluno};
console.log("Aluno atualizado " + alunoAtualizado + " end");

//6 - Transformar o objeto em JSON
const json = JSON.stringify(aluno);
console.log(json);

//7 - Voltar de JSON para objeto
const obj = JSON.parse(json);
console.log(obj);


//Atividade 2 -----------------------------------

const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};

/*

    1 - Como acessar o nome?
    console.log(usuario.nome);
    2 - Como acessar a cidade?
    console.log(usuario.endereco.cidade);
    3 - Como alterar a idade?
    usuario.idade = 26;
    4 - Como adicionar telefone?
    usuario.telefone = "(Número de telefone)";
    5 - Como remover o email?
    delete usuario.email;
    6 - Como criar uma cópia do usuário?
    let copiaUsuario = {...usuario};
    7 - Como extrair somente nome e cidade?
    console.log(usuario.nome);
    console.log(usuario.endereco.cidade);
    8 - Como transformar o objeto em JSON?
    const jason = JSON.stringify(usuario)
    9 - Como transformar o JSON novamente em objeto
    const objeto = JSON.parse(jason);
*/
console.log(usuario.nome);
console.log(usuario.endereco.cidade);
usuario.idade = 26;
console.log(usuario.idade);
usuario.telefone = "(Número de telefone)";
delete usuario.email;
console.log(usuario);
let copiaUsuario = {...usuario};
console.log("Cópi usuário" + copiaUsuario);
console.log(usuario.nome);
console.log(usuario.endereco.cidade);
const jason = JSON.stringify(usuario)
console.log(jason)
const objeto = JSON.parse(jason);
console.log(objeto);