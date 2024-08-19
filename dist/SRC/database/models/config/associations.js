"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa os modelos 'unidade' e 'cliente'
const unidades_1 = __importDefault(require("../unidades"));
const clientes_1 = __importDefault(require("../clientes"));
// Função responsável por definir as associações entre os modelos e sincronizar as tabelas no banco de dados
const defineAssociacoes = () => __awaiter(void 0, void 0, void 0, function* () {
    // Define a associação onde 'unidade' pertence a 'cliente' usando a chave estrangeira 'clienteId'
    unidades_1.default.belongsTo(clientes_1.default, {
        constraints: true, // Define que restrições como integridade referencial serão aplicadas
        foreignKey: 'clienteId' // Especifica o campo 'clienteId' como chave estrangeira
    });
    // Define a associação onde 'cliente' tem muitas unidades, novamente usando 'clienteId' como chave estrangeira
    clientes_1.default.hasMany(unidades_1.default, {
        constraints: true, // Restrições de integridade referencial
        foreignKey: 'clienteId' // Especifica o campo 'clienteId' como chave estrangeira
    });
    // Sincroniza o modelo 'cliente' com o banco de dados, criando ou atualizando a tabela conforme necessário
    yield clientes_1.default.sync();
    // Sincroniza o modelo 'unidade' com o banco de dados, criando ou atualizando a tabela conforme necessário
    yield unidades_1.default.sync();
});
// Exporta a função 'defineAssociacoes' como o padrão deste módulo
// Isso permite que as associações sejam definidas e sincronizadas em outras partes do código
exports.default = defineAssociacoes;
