// Importa o módulo 'express' para criar e gerenciar o servidor web
import express, { Router } from 'express';

// Importa as rotas personalizadas da aplicação
import Routers from './SRC/Routers';

// Importa a configuração da conexão com o banco de dados
import conectDb from './SRC/database/config/index';

// Importa a função de sincronização para a criação das tabelas no banco de dados
import sincDb from './SRC/database/models/config/InsertTabelas';

// Define a classe principal da aplicação chamada 'FleetFlowApp'
class FleetFlowApp {
    // Declara a propriedade 'App' do tipo 'express.Application'
    App: express.Application;

    // Propriedade para armazenar o roteador personalizado
    private router: any;

    // Propriedade pública para gerenciar a conexão com o banco de dados
    public _db: conectDb;

    // Propriedade privada para gerenciar a sincronização das tabelas no banco de dados
    private sinc: any;

    // Construtor da classe, responsável por inicializar a aplicação Express
    constructor(){
        // Cria uma instância do aplicativo Express e a atribui à propriedade 'App'
        this.App = express();

        // Configura as rotas com o roteador personalizado usando o arquivo principal index.ts
        this.router = Routers.router(this.App);

        // Inicializa a conexão com o banco de dados e executa os métodos necessários
        this._db = new conectDb();
        this._db.getSequelize(); // Obtém a instância do Sequelize para interagir com o banco de dados
        this._db.TestDb(); // Testa a conexão com o banco de dados

        // Sincroniza as tabelas no banco de dados chamando a função sincTab()
        this.sinc = sincDb.sincTab();
    }
}

// Exporta uma instância da classe 'FleetFlowApp' como o padrão deste módulo
// Isso permite que o aplicativo seja usado diretamente em outras partes do código
export default new FleetFlowApp();
