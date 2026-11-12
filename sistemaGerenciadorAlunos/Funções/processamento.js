//Trazer lista

//Saber quel é o último id cadastrado

//Somar + 1 para ser o próximo id

//Return

import { listarTodos } from "../Manipulador/manipulador_arquivo";

export async function gerarNovoId(){
    const registrosAlunos = await listarTodos();

    //Pegar todos dos ids existentes
    const ids = registrosAlunos.map((aluno) => aluno.id);

    //retornar o maior id encontrada + 1, garantindo que seja único
    const novoID = Math.max(...ids) + 1;
    return novoID;
}