import mongoose from "mongoose";

const Personal = mongoose.model("Personal", {
    nome: String,
    data: String, 
    cpf: String,
    numero: String,
    cref: String
})

export default Personal;
