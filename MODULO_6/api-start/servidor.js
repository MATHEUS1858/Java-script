//import
import http from 'http';

//criar o servidor
const servidor = http.createServer((req, res) => {
    //headers
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    //body
    res.end(JSON.stringify({ mensagem: "A minha primeira API com Node.js" }));

    //Demostra o método que está sendo utilizado
    console.log(req.method);
});

servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});