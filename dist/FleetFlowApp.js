"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo 'express' para criar e gerenciar o servidor web
const express_1 = __importDefault(require("express"));
const Routers_1 = __importDefault(require("./SRC/Routers"));
// Define a classe principal da aplicação chamada 'FleetFlowApp'
class FleetFlowApp {
    // Construtor da classe, responsável por inicializar a aplicação Express
    constructor() {
        // Cria uma instância do aplicativo Express e a atribui à propriedade 'App'
        this.App = (0, express_1.default)();
        this.router = Routers_1.default.router(this.App); // Configura as rotas com o roteador personalizado arquivo principal index.ts
    }
}
// Exporta uma instância da classe 'FleetFlowApp' como o padrão deste módulo
// Isso permite que o aplicativo seja usado diretamente em outras partes do código
exports.default = new FleetFlowApp;
