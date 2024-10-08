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
const servicesClientes_1 = __importDefault(require("../Services/servicesClientes"));
class ControllersCliente {
    static GetCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield servicesClientes_1.default.getClientes();
                res.status(201).json(clientes);
            }
            catch (error) {
                res.status(500).send(`Erro encontrado na requisição +++++++${error}`);
            }
        });
    }
    static GetNomeCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome } = req.params;
                console.log({ nome });
                const cliente = yield servicesClientes_1.default.getNameCliente(nome);
                res.status(201).json(cliente);
            }
            catch (error) {
                res.status(500).send(`Erro encontrado na requisição +++++++${error}`);
            }
        });
    }
}
exports.default = ControllersCliente;
