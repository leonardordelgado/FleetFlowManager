"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerClinete_1 = __importDefault(require("../Controllers/controllerClinete."));
// Classe que define as rotas relacionadas aos clientes
class clientesRouter {
    constructor() {
        this.clinteRouters = express_1.default.Router(); // Inicializa o roteador
        this.clinteRouters
            .get("/clientes", controllerClinete_1.default.GetCliente) // Rota para listar todos os clientes
            .get("/clientes/:nome", controllerClinete_1.default.GetNomeCliente) // Rota para obter um cliente específico pelo NOME
            .put("/clientes/:id") // Rota para atualizar um cliente pelo ID
            .post("/clientes") // Rota para criar um novo cliente
            .delete("/clientes/:id"); // Rota para deletar um cliente pelo ID
    }
}
exports.default = new clientesRouter(); // Exporta uma nova instância da classe com as rotas definidas
