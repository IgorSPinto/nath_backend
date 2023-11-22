import AlunoRepository from "../repository/AlunoRepository.js"
import AlunoValidacao from "../services/AlunoValidacao.js"


class AlunoController {
    /**
     * @param {Express} app 
     */

    static rotas(app) {
        
        app.get("/aluno", async (req, res) => {
            const aluno = await AlunoRepository.buscarAluno()
            res.status(200).json(aluno)
        })

        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/aluno/:id", async (req, res) => {
            const id = req.params.id
            const valido = await AlunoValidacao.validarBusca(id)
            if (valido) {
                const aluno = await AlunoRepository.buscarAlunoPorId(id)
                res.status(200).json(aluno)
            } else {
                res.status(404).json({ message: "Aluno não encontrado" })
            }
        })

        /**
         * Rota para deletar aluno
         */
        app.delete("/aluno/:id", async (req, res) => {
            const id = req.params.id
            const valido = await AlunoValidacao.validarBusca(id)
            if (valido) {
                await AlunoRepository.deletarAluno(id)
                res.status(200).json({ message: 'Aluno deletado com sucesso' })
            } else {
                res.status(404).json({ message: "Aluno não encontrado" })
            }
        })

        /**
         * Rota para inserir um novo aluno
         */
        app.post("/aluno", async (req, res) => {
            const body = req.body
			const valido = AlunoValidacao.validarCampos(...Object.values(body))
			if (valido) {
				const id = await AlunoRepository.criarAluno(body)
				res.status(201).json({ message: 'Aluno criado com sucesso', id:`${id}` })
			} else {
				res.status(400).json({ message: "Operação inválida, verifique os campos e tente novamente" })
			}
        })

        /**
         * Rota para atualizar um registro já existente na tabela aluno
         */
        app.put("/aluno/:id", async (req, res) => {
            const id = req.params.id
			const data = req.body
			const valido = await AlunoValidacao.validarBusca(id)
			if (valido) {
				await AlunoRepository.atualizarAluno(id, data)
				res.status(200).json({ message: "Aluno atualizado com sucesso" })
			} else {
				res.status(404).json({ message: "Aluno não encontrado" })
			}
        })
    }
}

export default AlunoController