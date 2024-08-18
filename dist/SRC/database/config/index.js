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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const { DATABASE, PASSWORD, HOST, DATABASE_USER } = process.env;
class conectDb {
    constructor() {
        this.db = {
            database: DATABASE,
            username: DATABASE_USER,
            password: PASSWORD,
            host: HOST,
            dialect: 'mysql',
            port: 3306
        };
        if (!conectDb.instance) {
            this.sequelize = new sequelize_1.Sequelize(this.db);
            conectDb.instance = this;
        }
        return conectDb.instance;
    }
    getSequelize() {
        return this.sequelize;
    }
    TestDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                console.log('Conexão realizada ao DB de desenvolvimento');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = conectDb;
