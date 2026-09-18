//Criar Arquivo
const fs = require("fs/promises");

async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "O Senhor dos Anéis",
            autor: "J.R.R. Tolkien"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K. Rowling"
        }
    ];

    //Criar o arquivo
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo Criado com Sucesso!");
}
//Listar Livros
async function listarLivros() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar para objeto
    const livros = JSON.parse(dados);
    //exibir no console (no futuro será seu site)
    console.log(livros);
}
//Adicionar Livro
async function adicionarLivro() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar (parse)
    const livros = JSON.parse(dados);
    //add livro (push)
    livros.push({
        id: 3,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins"
    });
    //retransfromar em json --> JSON
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));
    //"Livro adicionado com sucesso!"
    console.log("Livro Adicionado com Sucesso!");
}
//Alterar Livro
async function alterarLivro(id) {
    //ler o arquivo 
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar o arquivo JSON --> Objeto
    const livros = JSON.parse(dados);
    //descobrir o livro
    const livro = livros.find((livro) => livro.id === id);
    //se o livro não existir
    if (!livro) {
        console.log("Livro não encontrado");
        return;
    }
    //alterar o livro
    livro.autor = "Gerson Honorio";
    //retranformar objeto --> JSON
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));
    //falar que deu certo
    console.log("Livro Alterado com Sucesso!");
}
//Deletar Livro
async function deletarLivro(id) {
    //ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //trasformar o arquivo
    const livros = JSON.parse(dados);
    
    //logica não - msg
    if (!livros) {
        console.log("Lista de livros não encontrada");
        return;
    }
    //procurar o livro a ser deletado --- deleta os dados do livro
    const livrosAtualizados = livros.filter((livro) => livro.id !== id);

    //retransformar
    await fs.writeFile("Livros.json", JSON.stringify(livrosAtualizados, null, 2));
    //msg
    console.log("Livro Deletado com Sucesso!");
}
//Função executar
async function executar() {

    await criarArquivo();

    await listarLivros();

    await adicionarLivro();

    await alterarLivro(2);

    await deletarLivro(1);
}
//chamando o inicio (endpoint)
executar()