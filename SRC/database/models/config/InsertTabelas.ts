// Importa a função responsável por definir as associações entre os modelos
import defineAssociacoes from './associations';

// Define a classe 'sincDb' que gerencia a criação e sincronização das tabelas no banco de dados
class sincDb {
    // Propriedade privada para armazenar a função de associações
    private associacao: any;

    // Construtor da classe, responsável por inicializar a função de associações
    constructor(){
        // Atribui a função de definir as associações à propriedade 'associacao'
        this.associacao = defineAssociacoes;
    }

    // Método assíncrono para criar e sincronizar as tabelas no banco de dados
    async sincTab(): Promise<void> {
        try {
            // Chama a função que define as associações entre os modelos
            this.associacao();

            // Exibe uma mensagem de sucesso caso as tabelas sejam criadas ou sincronizadas com sucesso
            console.log("Tabelas criadas ou sincronizadas, associações configuradas.");
        } catch (error) {
            // Exibe uma mensagem de erro caso ocorra algum problema durante o processo de sincronização
            console.error('Erro ao criar tabelas:', error);
        }
    }
}

// Exporta uma instância da classe 'sincDb' como o padrão deste módulo
// Isso permite que a sincronização das tabelas seja executada diretamente em outras partes do código
export default new sincDb();
