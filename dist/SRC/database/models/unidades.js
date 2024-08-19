"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const db = new config_1.default;
const _db = db.getSequelize();
const unidade = _db.define('unidade', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    Unidade: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Endereco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IdentificadorCliente: {
        type: sequelize_1.DataTypes.STRING
    },
    ativo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
});
exports.default = unidade;
