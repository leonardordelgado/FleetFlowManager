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
// Importa a função responsável por definir as associações entre os modelos
const associations_1 = __importDefault(require("./associations"));
// Define a classe 'sincDb' que gerencia a criação e sincronização das tabelas no banco de dados
class sincDb {
    // Construtor da classe, responsável por inicializar a função de associações
    constructor() {
        // Atribui a função de definir as associações à propriedade 'associacao'
        this.associacao = associations_1.default;
    }
    // Método assíncrono para criar e sincronizar as tabelas no banco de dados
    sincTab() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Chama a função que define as associações entre os modelos
                this.associacao();
                // Exibe uma mensagem de sucesso caso as tabelas sejam criadas ou sincronizadas com sucesso
                console.log("Tabelas criadas ou sincronizadas, associações configuradas.");
            }
            catch (error) {
                // Exibe uma mensagem de erro caso ocorra algum problema durante o processo de sincronização
                console.error('Erro ao criar tabelas:', error);
            }
        });
    }
}
// Exporta uma instância da classe 'sincDb' como o padrão deste módulo
// Isso permite que a sincronização das tabelas seja executada diretamente em outras partes do código
exports.default = new sincDb();
