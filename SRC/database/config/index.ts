// Importa as configurações do dotenv para carregar as variáveis de ambiente
import 'dotenv/config';
import { Sequelize, Options } from 'sequelize';

// Extrai as variáveis de ambiente necessárias para a configuração do banco de dados
const {
    DATABASE,
    PASSWORD,
    HOST,
    DATABASE_USER
} = process.env;

// Classe responsável por gerenciar a conexão com o banco de dados
class conectDb {
    static instance: conectDb; // Implementa o padrão Singleton para garantir uma única instância da classe
    private db_Dev: Options; // Opções de configuração do Sequelize
    sequelize: Sequelize; // Instância do Sequelize usada para interagir com o banco de dados

    constructor() {
        // Valida se todas as variáveis de ambiente essenciais estão definidas
        if (!DATABASE || !DATABASE_USER || !PASSWORD || !HOST) {
            throw new Error('Missing database environment variables.');
        }

        // Define as configurações do banco de dados
        this.db_Dev = {
            database: DATABASE, // Nome do banco de dados
            username: DATABASE_USER, // Nome de usuário para conexão
            password: PASSWORD, // Senha para o banco de dados
            host: HOST, // Endereço do host do banco de dados
            dialect: 'mysql', // Tipo de banco de dados (MySQL)
            port: 3306 // Porta padrão para o MySQL
        };

        // Verifica se já existe uma instância da classe (padrão Singleton)
        if (!conectDb.instance) {
            // Se a variável de ambiente PORT não estiver definida, inicializa o Sequelize
            if (!process.env.PORT) {
                this.sequelize = new Sequelize(this.db_Dev); // Cria a conexão com o banco de dados
                console.log('O Banco de desenvolvimento está conectado. ATENÇÃO: o desenvolvimento é seguro');
            } else {
                // Aqui você pode adicionar lógica adicional se necessário quando a porta está definida
            }
            // Atribui a instância criada à propriedade estática para manter o Singleton
            conectDb.instance = this;
        }
        // Retorna a instância Singleton existente ou recém-criada
        return conectDb.instance;
    }

    // Método para obter a instância do Sequelize
    getSequelize() {
        return this.sequelize;
    }

    // Método para testar a conexão com o banco de dados
    async TestDb(): Promise<void> {
        try {
            await this.sequelize.authenticate(); // Testa a autenticação e a conexão
        } catch (error) {
            console.error('Unable to connect to the database:', error); // Trata erros de conexão
        }
    }
}

// Exporta a classe para ser usada em outros módulos
export default conectDb;
