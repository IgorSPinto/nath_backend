import Personal from "../models/PersonalModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class PersonalServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(Personal, id)
        return response
    }

    static validarCampos(nome, cpf, telefone){
        return this.validarNome(nome) && this.validarCpf(cpf) && this.validarTelefone(telefone)
    }

} export default PersonalServices