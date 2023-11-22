import Aluno from "../models/AlunoModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class AlunoServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(Aluno, id)
        return response
    }

    static validarCampos(nome, cpf, nascimento, telefone){
        return this.validarNome(nome) && this.validarCpf(cpf) && this.validarNascimento(nascimento) && this.validarTelefone(telefone)
    }

} export default AlunoServices