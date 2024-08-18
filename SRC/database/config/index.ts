import 'dotenv/config';
import { Sequelize, Options } from 'sequelize';

const {
    DATABASE,
    PASSWORD,
    HOST,
    DATABASE_USER
} = process.env;

class conectDb{
    static instance: conectDb
    private db: Options
    sequelize: Sequelize
    constructor (){
       this.db = {
        database: DATABASE,
        username: DATABASE_USER,
        password: PASSWORD,
        host:HOST,
        dialect: 'mysql',
        port: 3306
       }
       if(!conectDb.instance){
            this.sequelize = new Sequelize(this.db)
            conectDb.instance = this
        }
       return conectDb.instance
    }

    getSequelize(){
        return this.sequelize;
    }

    async TestDb(): Promise<void>{
        try {
            await this.sequelize.authenticate()
            console.log('Conexão realizada ao DB de desenvolvimento');
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    }
}

export default conectDb