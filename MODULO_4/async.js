//Async

//No promise temos

buscarUsuarioGerson().then(usuario => {
    console.log(usuario);
});

//async/await = Essa função vai funcionar de forma assíncrona e vai ter um pedaço que vamos precisar esperar
//No async-await

async function buscarUsuarioGersonAsync() {
    try {
        //Aqui é o que é desejado que aconteça
        const usuario = await buscarUsuarioGerson();
        console.log(usuario);
    }
    catch (erro) {
        //erro
        console.log(erro);
    }

}