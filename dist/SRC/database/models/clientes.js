"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const dbConect = new config_1.default;
const _db = dbConect.getSequelize();
const cliente = _db.define('cliente', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = cliente;
