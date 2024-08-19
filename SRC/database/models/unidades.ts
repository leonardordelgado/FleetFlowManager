
import { DataTypes } from "sequelize";
import conectDb from "../config";

const db = new conectDb
const _db = db.getSequelize()
const unidade = _db.define('unidade', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    Unidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IdentificadorCliente: {
        type: DataTypes.STRING
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

export default unidade;