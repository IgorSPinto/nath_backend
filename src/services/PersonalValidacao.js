import Personal from "../models/PersonalModel.js"
import ValidacaoServices from "./ValidacaoServices.js"

class PersonalServices extends ValidacaoServices {

    static async validarBusca(id){
        const response = await this.exists(Personal, id)
        return response
    }

    static validarCampos(nome, cpf, telefone, data, cref){
        return this.validarNome(nome) && this.validarCpf(cpf) && this.validarTelefone(telefone) && this.validarData(data) && this.validarCref(cref)
    }

} export default PersonalServices