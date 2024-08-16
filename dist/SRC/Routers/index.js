"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const routerClientes_1 = __importDefault(require("./routerClientes"));
class Routers {
    // Método responsável por configurar as rotas e middlewares na aplicação Express
    router(App) {
        // Middleware para processar JSON no corpo das requisições
        App.use(body_parser_1.default.json());
        // Middleware para processar dados urlencoded no corpo das requisições
        App.use(body_parser_1.default.urlencoded({ extended: false }));
        // Adiciona as rotas específicas do módulo de clientes
        App.use(routerClientes_1.default.clinteRouters);
    }
}
// Exporta uma instância da classe Routers para ser utilizada no aplicativo principal
exports.default = new Routers;
