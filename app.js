import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv';
import cors from "cors";
import AlunoController from "./src/controllers/AlunoController.js";
import PersonalController from "./src/controllers/PersonalController.js";


config()

/* Inicialização do Express */
const app = express()

/* Variável de alocação de porta (PORT) */
const PORT = process.env.PORT || 3000
const USER = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

/* Levante do servidor da API */
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Aplicação online na porta: ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error.message)
})

/* Midleware para reconhecimento do formato JSON */
app.use(express.json())
app.use(cors('*'))

/* Chamada das rotas controller */
AlunoController.rotas(app)
PersonalController.rotas(app)