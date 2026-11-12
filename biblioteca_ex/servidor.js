//imports e constantes
import express from 'express';
import { livros } from "./livros.js"; //importa a lista de livros do arquivo
const app = express(); //cria uma instância do express
const PORT = 3000; //porta que o servidor vai escutar
app.use(express.json()); //permite que o serviudor entenda requisições com o corpo (body) em JSON

//lógica do servidor
//get boas vindas
app.get("/", (req, res) => {
    res.json({ mensagem: "Servidor rodando!" });
});

//get para listar os livros
app.get("/livros", (req, res) => {
    res.json(livros);
});

//get pelo id do livro

app.get("/livros/:id", (req, res) => {
    //o id precisa ser convertido para número, pois o req.params.id é um
    const id = Number(req.params.id); //converte o id para número
    const livro = livros.find((le) => le.id === id);
    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado" });
    }
    res.json(livro);
});

//rota os autores tem seu nome exibindo
app.get("/livros/autor/maiusculo", (req, res) => {
    const resultado = autorMaiusculo(livros);

    res.json(resultado);
});

//funções auxiliares
//para sabermos em que porta está roando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


//função para deixar o nome do autor maiúsculo
export function autorMaiusculo(livro) {
    return livros.map((livro) => ({
        ...livro,
        autor: livro.autor.toUpperCase()
    }));
}