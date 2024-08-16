"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo FleetFlowApp a partir do arquivo 'FleetFlowApp.ts'
const FleetFlowApp_1 = __importDefault(require("./FleetFlowApp"));
// Define a porta que será utilizada pelo servidor.
// Tenta usar a porta definida na variável de ambiente PORT, caso não esteja definida, usa a porta 3005.
let Port = process.env.PORT || 3005;
// Inicia o servidor  da aplicação.
FleetFlowApp_1.default.App.listen(Port, () => {
    // Verifica se o servidor está rodando na porta definida pela variável de ambiente (provavelmente produção).
    if (Port === process.env.PORT) {
        // Exibe uma mensagem indicando que o servidor está em ambiente de produção.
        console.log(`Servidor rodando em ambiente de produção na porta ${Port}`);
        // Alerta que o ambiente de desenvolvimento e debug não é seguro.
        console.log("++++++ATENÇÃO ++++++++ O desenvolvimento e debug NÃO são seguros, mude para o ambiente de desenvolvimento");
    }
    else {
        // Caso contrário, o servidor está rodando no ambiente de desenvolvimento.
        console.log(`Servidor rodando em ambiente de desenvolvimento na porta ${Port}`);
        // Informa que o ambiente de desenvolvimento e debug é seguro.
        console.log("+++++++++O desenvolvimento e debug são seguros++++++++");
    }
});
