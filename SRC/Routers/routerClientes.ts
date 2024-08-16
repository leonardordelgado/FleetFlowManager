import express, { Request, Response } from 'express';

// Classe que define as rotas relacionadas aos clientes
class clientesRouter {
    public clinteRouters: express.Router; // Instância do roteador do Express

    constructor() {
        this.clinteRouters = express.Router(); // Inicializa o roteador
        this.clinteRouters
            .get("/clientes")          // Rota para listar todos os clientes
            .get("/clientes/:id")      // Rota para obter um cliente específico pelo ID
            .put("/clientes/:id")      // Rota para atualizar um cliente pelo ID
            .post("/clientes")         // Rota para criar um novo cliente
            .delete("/clientes/:id");  // Rota para deletar um cliente pelo ID
    }
}

export default new clientesRouter(); // Exporta uma nova instância da classe com as rotas definidas
