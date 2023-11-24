
# API Academia FitSpace

<div>

## Introdução
Este é um projeto de backend para uma API de gestão de dados de uma academia fictícia chamada FitSpace. A API é desenvolvida em JavaScript, utilizando Node.js e Express.

## Requisitos
Para executar o projeto em sua máquina, é necessário ter o Node.js instalado. Você pode baixá-lo em [Node.js](https://nodejs.org/).

## Stacks

O projeto utiliza as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Como executar o projeto

1. Clone o repositório e acesse a pasta do projeto no terminal:

```bash
$ git clone https://github.com/IgorSPinto/nath_backend.git
$ cd nath_backend
```

2. Instale as dependências:

```bash
$ npm install
```

3. Crie um arquivo chamado `.env` na raiz do projeto com as seguintes variáveis:

```bash
USER_DB=SeuUsuario
PASSWORD=SuaSenha
DATABASE=NomeDoBanco
CLUSTER=NomeDoCluster
PORT=PortaDaAPI
```

4. Execute a API:

```bash
$ npm start
```

## Entidades

### Aluno

- **nome**: String
- **cpf**: String
- **nascimento**: String
- **telefone**: String
- **treino**: String

### Personal

- **nome**: String
- **data**: String
- **cpf**: String
- **numero**: String
- **cref**: String

## Rotas

### Alunos

- **GET** http://localhost:3000/aluno
- **GET** http://localhost:3000/aluno/:id
- **POST** http://localhost:3000/aluno
- **PUT** http://localhost:3000/aluno/:id
- **DELETE** http://localhost:3000/aluno/:id

### Personais

- **GET** http://localhost:3000/personal
- **GET** http://localhost:3000/personal/:id
- **POST** http://localhost:3000/personal
- **PUT** http://localhost:3000/personal/:id
- **DELETE** http://localhost:3000/personal/:id

## Exemplos de Requisições

### Alunos

- **POST** http://localhost:3000/aluno

```json
{
    "nome": "João Silva",
    "cpf": "123.456.789-01",
    "nascimento": "01/01/1990",
    "telefone": "(41) 99999-9999",
    "treino": "Musculação"
}
```

- **GET** http://localhost:3000/aluno/655ff23484820c60b2fdcee0

```json
{
    "nome": "João Silva",
    "cpf": "123.456.789-01",
    "nascimento": "01/01/1990",
    "telefone": "(41) 99999-9999",
    "treino": "Musculação"
}
```

### Personais

- **POST** http://localhost:3000/personal

```json
{
    "nome": "Maria Souza",
    "data": "01/01/1985",
    "cpf": "987.654.321-01",
    "numero": "123",
    "cref": "567890"
}
```

- **GET** http://localhost:3000/personal/655ff36d1f5677ad0dad8a30

```json
{
    "nome": "Maria Souza",
    "data": "01/01/1985",
    "cpf": "987.654.321-01",
    "numero": "123",
    "cref": "567890"
}
```

Desenvolvido por: SeuNome
</div>
