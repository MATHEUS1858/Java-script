//Servidor para teste
//1 - import
import http from 'http';

//2 - Logica do servidor
//Criar o servidor
//req - request (requisição)
//res - response (resposta)
const servidor = http.createServer((req, res) => {
    //headers
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    //body - corpo da resposta
    res.end(JSON.stringify({ mensagem: "A minha primeira API com Node.js" }));

    //Mostra o método que está sendo utilizado
    console.log(req.method);
});
//3 - Funções auxiliares
//Saber se o servidor está rodando
servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});