import Repository from "../repository/Repository.js";

class ValidacaoServices {
    static async exists(MongooseModel, id){
        try{
            const response = await Repository.findById(MongooseModel, id)
            if(response == null){
                throw new error()
            }
            return true
        }catch(error){
            return false 
        }
    }

   /* Metodos gerais de validação, para Personal e Aluno*/
    static  validarNome(nome){
    return nome.length > 2 && typeof(nome) == "string"
    }

    static validarTelefone(telefone){
        return telefone.length > 2 && typeof(telefone) == "string"
    }

    static  validarCpf(cpf){
        return cpf.length > 2 && typeof(cpf) == "string"
    }

    static  validarNascimento(nascimento){
        return nascimento.length > 2 && typeof(nascimento) == "string"
    }
    
}

export default ValidacaoServices;
