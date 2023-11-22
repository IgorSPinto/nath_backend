import Repository from "./Repository.js"
import Personal from "../models/PersonalModel.js";

class PersonalRepository extends Repository {

    /**
     * Método para criar Personal do usuário
     * @param {*} data 
     */
    static async criarPersonal(data){
        const response = await this.create(Personal, data)
        const id = JSON.stringify(response._id)
        return id
    }

    /**
     * Método para buscar todos os Personals 
     * @returns {<Array> Personal} response
     */
    static async buscarPersonal(){
       const response = await this.findAll(Personal)
       return response
    }

    /**
     * Método para buscar Personal do usuário por ID
     * @param {String} id 
     * @returns {Data}
     */
    static async buscarPersonalPorId(id){
        const response = await this.findById(Personal, id)
        return response
    }

    /**
     * Método para atualizar o Personal do usuário por ID
     * @param {String} id 
     * @param {*} data 
     */
    static async atualizarPersonal(id, data){
        await this.updateById(Personal, id, data)
    }

    /**
     * Método para deletar o Personal do usuário por ID
     * @param {String} id 
     */
    static async deletarPersonal(id){
        await this.deleteById(Personal, id)
    }
} export default PersonalRepository