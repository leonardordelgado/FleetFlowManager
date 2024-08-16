import bodyParser from 'body-parser';
import routerClientes from './routerClientes';

class Routers {
    // Método responsável por configurar as rotas e middlewares na aplicação Express
    router(App) {
        // Middleware para processar JSON no corpo das requisições
        App.use(bodyParser.json());

        // Middleware para processar dados urlencoded no corpo das requisições
        App.use(bodyParser.urlencoded({ extended: false }));

        // Adiciona as rotas específicas do módulo de clientes
        App.use(
            routerClientes.clinteRouters
        );

    }
}

// Exporta uma instância da classe Routers para ser utilizada no aplicativo principal
export default new Routers;