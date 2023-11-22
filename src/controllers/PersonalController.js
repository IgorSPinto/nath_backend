import PersonalRepository from "../repository/PersonalRepository.js"
import PersonalValidacao from "../services/PersonalValidacao.js"


class PersonalController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        
        app.get("/personal", async (req, res) => {
            const personal = await PersonalRepository.buscarPersonal()
            res.status(200).json(personal)
        })

        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/personal/:id", async (req, res) => {
            const id = req.params.id
            const valido = await PersonalValidacao.validarBusca(id)
            if (valido) {
                const personal = await PersonalRepository.buscarPersonalPorId(id)
                res.status(200).json(personal)
            } else {
                res.status(404).json({ message: "Personal não encontrado" })
            }
        })

        /**
         * Rota para deletar personal
         */
        app.delete("/personal/:id", async (req, res) => {
            const id = req.params.id
            const valido = await PersonalValidacao.validarBusca(id)
            if (valido) {
                await PersonalRepository.deletarPersonal(id)
                res.status(200).json({ message: 'Personal deletado com sucesso' })
            } else {
                res.status(404).json({ message: "Personal não encontrado" })
            }
        })

        /**
         * Rota para inserir um novo personal
         */
        app.post("/personal", async (req, res) => {
            const body = req.body
			const valido = PersonalValidacao.validarCampos(...Object.values(body))
			if (valido) {
				const id = await PersonalRepository.criarPersonal(body)
				res.status(201).json({ message: 'Personal criado com sucesso', id:`${id}` })
			} else {
				res.status(400).json({ message: "Operação inválida, verifique os campos e tente novamente" })
			}
        })

        /**
         * Rota para atualizar um registro já existente na tabela personal
         */
        app.put("/personal/:id", async (req, res) => {
            const id = req.params.id
			const data = req.body
			const valido = await PersonalValidacao.validarBusca(id)
			if (valido) {
				await PersonalRepository.atualizarPersonal(id, data)
				res.status(200).json({ message: "Personal atualizado com sucesso" })
			} else {
				res.status(404).json({ message: "Personal não encontrado" })
			}
        })
    }
}

export default PersonalController