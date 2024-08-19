import { DataTypes } from 'sequelize';
import conectDb from '../config';

const dbConect = new conectDb;
const _db = dbConect.getSequelize();

const cliente = _db.define('cliente',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER, 
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default cliente;