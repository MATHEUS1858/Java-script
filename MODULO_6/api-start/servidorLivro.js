//import
import http from "http";
//logica do servidor
const servidor = http.createServer((req, res) => {
    //headers
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    //logica body de rotas
    if(req.url === "/"){
        res.end("Pagina Inicial");
    }else if (req.url === "/livros"){
        //vou no banco faço um delect
        //transformo em json
        //devolve para o front
        res.end("Página de livros");
    }else if(req.url === "/usuarios"){
        res.end("Página de usuários");
    }else{
        res.end("Erro 404: Página não encontrada");
    }
});

servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});