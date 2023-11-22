import mongoose from "mongoose";

const Aluno = mongoose.model("Aluno", {
    nome: String,
    cpf: String, 
    nascimento: String,
    telefone: String,
    treino: String
})

export default Aluno;
