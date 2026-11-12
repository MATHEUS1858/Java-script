import express from "express";
import { listarTodos, salvarTodos, listarPorId } from "./Manipulador/manipulador_arquivo.js";
import { gerarNovoId } from "./Funções/processamento.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bem-vindo à API do nosso Sistema de Gerenciamento de Alunos");
});

//GET / alunos
app.get("/alunos", async (req, res) => {
    try {
        //o que eu quero que aconteça
        const alunos = await listarTodos();
        return res.status(200).json(alunos);
    }
    catch (error) {
        console.log("Erro ao listar alunos", error);
        return res.status(500).json({ error: "Não foi possível ler alunos" });
    }
});

//GET / aluno/:id
app.get("/aluno/:id", async (req, res) => {
    try {
         const id = Number(req.params.id);

         const dados = await listarTodos();

         

         if(dadosAtualizados.length === dados.length){
            return res.status(404).json({erro: "Alunos não listados"});
        }
    }
    catch (error) {
        console.log("Erro ao listar alunos", error);
        return res.status(500).json({ error: "Não foi possível ler alunos" });
    }
});

//DELETE / alunos /:id
app.delete("/aluno/:id", async (req, res) => {
    try {
        //Recuperar o ID enviado na url e converter para number
        const id = Number(req.params.id);

        //Leio os dados cadastrados
        const dados = await listarTodos();

        //Mantém apenas os itens com id diferente
        const dadosAtualizados = dados.filter((aluno) =>
            aluno.id !==id);

        //Verificar se deletou
        if(dadosAtualizados.length === dados.length){
            return res.status(404).send("Aluno não deletado");
        }

        //Salvar a lista nova
        await salvarTodos(dadosAtualizados);

        //Mensagem de resposta para o Insomnia
        return res.status(200).send("Aluno excluído com sucesso");
    }
    catch (error) {
        console.log("Erro ao deletar aluno", error);
        return res.status(500).send("Não foi possível deletar aluno");
    }

});

//POST /alunos
app.post("/alunosPost", async (req, res) => {
    try{
        const {matricula, nome, turma, data, presente, motivoSaida, minutosFora, alertaTempo} = req.body;

        if(!matricula || !nome || !turma || !data || !presente){
            return res.status(400).send("Todos os campos são obrigatórios");
        }

        //Gerando um id único
        const id = await gerarNovoId();

        const novoAluno = {
            id: Number(id),
            matricula,
            nome,
            turma,
            data,
            presente: Boolean(presente),
            motivoSaida: motivoSaida || null,
            minutosFora: Number(minutosFora) || 0,
            alertaTempo: alertaTempo || false,
        };

        const registrosAlunos = await listarTodos();
        registrosAlunos.push(novoAluno);
        await salvarTodos(registrosAlunos);
        
        return res.status(201).send("Aluno registrado com sucesso");
    }
    catch(error){
        console.log("Erro ao registrar aluno", error);
        return res.status(500).json
        ({error: "Não foi possível registrar aluno"});
    }
});

//Se não encontrei nenhuma rota - sempre vai ter
app.use((req, res) => {
    res.status(404).send("Rota não encontrada");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Listar alunos por id
export async function listarPorId(id){
    const registrosAlunos = await listarTodos();
    return alunos = registrosAlunos.find((aluno) => aluno.id === id);
}