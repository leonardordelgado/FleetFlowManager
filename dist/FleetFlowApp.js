"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo 'express' para criar e gerenciar o servidor web
const express_1 = __importDefault(require("express"));
// Importa as rotas personalizadas da aplicação
const Routers_1 = __importDefault(require("./SRC/Routers"));
// Importa a configuração da conexão com o banco de dados
const index_1 = __importDefault(require("./SRC/database/config/index"));
// Importa a função de sincronização para a criação das tabelas no banco de dados
const InsertTabelas_1 = __importDefault(require("./SRC/database/models/config/InsertTabelas"));
// Define a classe principal da aplicação chamada 'FleetFlowApp'
class FleetFlowApp {
    // Construtor da classe, responsável por inicializar a aplicação Express
    constructor() {
        // Cria uma instância do aplicativo Express e a atribui à propriedade 'App'
        this.App = (0, express_1.default)();
        // Configura as rotas com o roteador personalizado usando o arquivo principal index.ts
        this.router = Routers_1.default.router(this.App);
        // Inicializa a conexão com o banco de dados e executa os métodos necessários
        this._db = new index_1.default();
        this._db.getSequelize(); // Obtém a instância do Sequelize para interagir com o banco de dados
        this._db.TestDb(); // Testa a conexão com o banco de dados
        // Sincroniza as tabelas no banco de dados chamando a função sincTab()
        this.sinc = InsertTabelas_1.default.sincTab();
    }
}
// Exporta uma instância da classe 'FleetFlowApp' como o padrão deste módulo
// Isso permite que o aplicativo seja usado diretamente em outras partes do código
exports.default = new FleetFlowApp();
