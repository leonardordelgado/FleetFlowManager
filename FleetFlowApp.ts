// Importa o módulo 'express' para criar e gerenciar o servidor web
import express, { Router } from 'express';

import Routers from './SRC/Routers';

import conectDb from './SRC/database/config/index';

// Define a classe principal da aplicação chamada 'FleetFlowApp'
class FleetFlowApp {
    // Declara a propriedade 'App' do tipo 'express.Application'
    App: express.Application;
    private router: any 
    public _db: conectDb
    // Construtor da classe, responsável por inicializar a aplicação Express
    constructor(){
        // Cria uma instância do aplicativo Express e a atribui à propriedade 'App'
        this.App = express();
        this.router = Routers.router(this.App); // Configura as rotas com o roteador personalizado arquivo principal index.ts
        this._db = new conectDb
        this._db.getSequelize()
        this._db.TestDb()
    }
}

// Exporta uma instância da classe 'FleetFlowApp' como o padrão deste módulo
// Isso permite que o aplicativo seja usado diretamente em outras partes do código
export default new FleetFlowApp;
