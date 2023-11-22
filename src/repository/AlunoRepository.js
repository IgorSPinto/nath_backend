import Repository from "./Repository.js"
import Aluno from "../models/AlunoModel.js";

class AlunoRepository extends Repository {

    /**
     * Método para criar aluno do usuário
     * @param {*} data 
     */
    static async criarAluno(data){
        const response = await this.create(Aluno, data)
        const id = JSON.stringify(response._id)
        return id
    }

    /**
     * Método para buscar todos os alunos 
     * @returns {<Array> Aluno} response
     */
    static async buscarAluno(){
       const response = await this.findAll(Aluno)
       return response
    }

    /**
     * Método para buscar aluno do usuário por ID
     * @param {String} id 
     * @returns {Data}
     */
    static async buscarAlunoPorId(id){
        const response = await this.findById(Aluno, id)
        return response
    }

    /**
     * Método para atualizar o aluno do usuário por ID
     * @param {String} id 
     * @param {*} data 
     */
    static async atualizarAluno(id, data){
        await this.updateById(Aluno, id, data)
    }

    /**
     * Método para deletar o aluno do usuário por ID
     * @param {String} id 
     */
    static async deletarAluno(id){
        await this.deleteById(Aluno, id)
    }
} export default AlunoRepository