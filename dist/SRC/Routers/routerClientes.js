"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Classe que define as rotas relacionadas aos clientes
class clientesRouter {
    constructor() {
        this.clinteRouters = express_1.default.Router(); // Inicializa o roteador
        this.clinteRouters
            .get("/clientes") // Rota para listar todos os clientes
            .get("/clientes/:id") // Rota para obter um cliente específico pelo ID
            .put("/clientes/:id") // Rota para atualizar um cliente pelo ID
            .post("/clientes") // Rota para criar um novo cliente
            .delete("/clientes/:id"); // Rota para deletar um cliente pelo ID
    }
}
exports.default = new clientesRouter(); // Exporta uma nova instância da classe com as rotas definidas
