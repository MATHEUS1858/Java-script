//import
import express from "express";
import { listarTodos, salvarTodos } from "./Manipulador/manipuladorArquivo.js";

const app = express(); //criação da instância do express
const PORT = 3000;
app.use(express.json()); //convertendo de maneira mais direta (middleware)

//lógica
//rotas

//GET - Boas vindas
app.get("/", (req, res) => {
    res.send("Bem-vindo à API da nossa clínica veterinária");
});

//GET - atendimentos
app.get("/atendimentos", async (req, res) => {
    try {
        //o que eu quero que aconteça
        const cadastros = await listarTodos();
        return res.status(200).json(cadastros);
    }
    catch (error) {
        console.log("Erro ao listar atendimentos", error);
        return req.status(500).json({ error: "Não foi possível ler os cadastros" });
    }
});

//DELETE / atendimentos /:id
app.delete("/atendimentos/:id", async (req, res) => {
    try {
        //Recuperar o ID enviado na url e converter para number
        const id = Number(req.params.id);

        //Leio os dados cadastrados
        const dados = await listarTodos();

        //Mantém apenas os itens com id diferente
        const dadosAtualizados = dados.filter((atendimento) =>
            atendimento.id !==id);

        //Verificar se deletou
        if(dadosAtualizados.length === dados.length){
            return res.status(404).json({erro: "Atendimento não deletado"});
        }

        //Salvar a lista nova
        await salvarTodos(dadosAtualizados);

        //Mensagem de resposta para o Insomnia
        return res.status(200).json({mensagem: "Atendimento excluído com sucesso"});
    }
    catch (error) {
        console.log("Erro ao deletar cadastro", error);
        return res.status(500).json({ error: "Não foi possível deletar cadastro" });
    }

});

//POST /atendimentoPost
app.post("/atendimentosPost", async (req, res) => {
    try{
        //dado do novo cadastro
        const {id, pet, raca, idade, tutor, diaAtendimento, valorGasto} =
        req.body;

        //Valida campos obrigatórios
        if(!id || !pet || !raca || !idade || !tutor || !diaAtendimento || !valorGasto){
            return res.status(400).json({erro: "Todos os campos são obrigatórios"});
        }

        //Criando objetos
        const novoCadastro = {
            id: Number(id),
            pet: pet,
            raca: raca,
            idade: Number(idade),
            tutor: tutor,
            diaAtendimento: diaAtendimento,
            valorGasto: Number(valorGasto)
        };

        const cadastro = await listarTodos();
        cadastro.push(novoCadastro);
        await salvarTodos(cadastro);
        
        return res.status(201).json({mensagem: "Cadastro realizado com sucesso"});
    }
    catch(error){
        console.log("Erro ao salvar cadastro", error);
        return res.status(500).json
        ({error: "Não foi possível salvar o cadastro"});
    }
});

//PUT /atendimentos/:id
app.put("atendimentos/:id", async (req, res) => {
    try{
        //Recuperar ID enviado na url e converter para Number
        const id = Number(req.params.id);

        //Lendo os dados cadastrados
        const dados = await listarTodos();

        //Procurar o item com ID informado usando find
        const atendimentoExistente = dados.find(
            (atendimento) => atendimento.id === id
        );

        //verificar se encontrou o atendimento
        if(!atendimentoExistente) {
            return res.status(404).json({erro: "Atendimento não encontrado"});
        }

        //se comportara como um novo cadastro
        //dado no novo cadastro
        const {pet, raca, idade, tutor, diaAtendimento, valorGasto} =
        req.body;

         //Valida campos obrigatórios
        if(!id || !pet || !raca || !idade || !tutor || !diaAtendimento || !valorGasto){
            return res.status(400).json({erro: "Todos os campos são obrigatórios"});
        }

        //Criando objetos
        const atendimentoAtualizado = {
            id: Number(id),
            pet: pet,
            raca: raca,
            idade: Number(idade),
            tutor: tutor,
            diaAtendimento: diaAtendimento,
            valorGasto: Number(valorGasto)
        };

        //substituir o atendimento existente pelo atualizado
        const dadosAtualizados = dados.map((atendimento) =>
            atendimento.id === id ? atendimentoAtualizado : atendimento
        );

        //salvando lista nova
        await salvarTodos(dadosAtualizados);

        //mensagem de resposta
        return res.status(200).json({mensagem: "Atendimento atualizado com sucesso"});
    }
    catch(error){
        console.log("Erro ao salvar cadastro", error);
        return res.status(500).json
        ({error: "Não foi possível alterar e salvar o cadastro"})
    }
});

//Se não encontrei nenhuma rota - sempre vai ter
app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada" });
});

//funções auxiliares
app.listen(PORT, () => {
    console.log("Está rodando na porta:", PORT);
});