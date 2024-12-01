# API em JavaScript com node e express

Um projeto pessoal para praticar a criação de APIs com node.

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Rotas da API](#rotas-da-api)
- [Contato](#contato)

## Sobre

Uma API que atualmente faz o CRUD e a autenticação de usuários.

### Dependências usadas:

- express
- body-parser
- config
- dotenv
- express-list-endpoints
- jsonwebtoken(jwt)
- mysql2
- sequelize
- bcrypt
- nodemon

### Estrutura:

```
.
├── config
│   ├── express.js
│   └── sequelize.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── controllers
    │   ├── loginController.js
    │   └── userController.js
    ├── middlewares
    │   └── auth.js
    ├── models
    │   ├── index.js
    │   └── user.js
    └── routes
        ├── login.js
        └── user.js

```

## Instalação

Instruções sobre como instalar e configurar o projeto localmente.

1. Clone o repositório:
    ```shell
   git clone https://github.com/AllRedCat/JSapi
   cd JSapi
   npm install
    ```
   
2. Configure o arquivo .env:
   UNAME="usuário_do_db"
   PASS="senha_do_db"
   DB="nome_do_db"
   HOST="host_do_db"
   PORT="porta_do_db"
   SECRET="hash_para_gerar_token"

3. Inicie o servidor:
    ```shell
    node index.js
    ```
   Caso use o nodemon:
    ```shell
    npm start
    ```

## Rotas da API

    Usuários:

        GET /api/users: Obter todos os usuários.

        GET /api/users/:id: Obter um usuário específico pelo ID.

        POST /api/users: Criar um novo usuário.

        PUT /api/users/:id: Atualizar um usuário pelo ID.

        DELETE /api/users/:id: Deletar um usuário pelo ID.

    Login:

        POST /api/login: Autenticação de usuário.

## Contato

- [Linkeding](https://www.linkedin.com/in/gabriel-genaro-433a2223a/)
- [GitHub](https://github.com/AllRedCat/JSapi)
- [Instagram](https://www.instagram.com/gabrielfariadev/)