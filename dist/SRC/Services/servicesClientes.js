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
const clientes_1 = __importDefault(require("../database/models/clientes"));
exports.default = new class ServicesClientes {
    getClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resposta = (yield clientes_1.default.findAll({
                    attributes: ['id', 'nome']
                })).map(cliente => ({
                    id: cliente.dataValues.id,
                    nome: cliente.dataValues.nome
                }));
                return resposta;
            }
            catch (error) {
                console.error('Erro ao buscar clientes:', error);
                throw new Error('Não foi possível buscar os clientes.');
            }
        });
    }
};
