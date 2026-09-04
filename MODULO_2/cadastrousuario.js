//Cadastro de usuários

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Gerson", "SempreAgora", 25030201011, "x@gmail.com");

console.log(usuario);

console.log("Olá " + usuario.nome + ", Seu cadastro foi realizado com sucesso!")
//---------------------------------

//função tradicional
function somarTrad(numero1, numero2){
    return numero1 + numero2;
}

//Arrow functions
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}



console.log("Tradicional", somarTrad(8, 3));
console.log("Arrow function", somar(8, 3));