// Importa os modelos 'unidade' e 'cliente'
import unidade from '../unidades';
import cliente from '../clientes';

// Função responsável por definir as associações entre os modelos e sincronizar as tabelas no banco de dados
const defineAssociacoes = async () => {
    // Define a associação onde 'unidade' pertence a 'cliente' usando a chave estrangeira 'clienteId'
    unidade.belongsTo(cliente, {
        constraints: true, // Define que restrições como integridade referencial serão aplicadas
        foreignKey: 'clienteId' // Especifica o campo 'clienteId' como chave estrangeira
    });

    // Define a associação onde 'cliente' tem muitas unidades, novamente usando 'clienteId' como chave estrangeira
    cliente.hasMany(unidade, {
        constraints: true, // Restrições de integridade referencial
        foreignKey: 'clienteId' // Especifica o campo 'clienteId' como chave estrangeira
    });

    // Sincroniza o modelo 'cliente' com o banco de dados, criando ou atualizando a tabela conforme necessário
    await cliente.sync();

    // Sincroniza o modelo 'unidade' com o banco de dados, criando ou atualizando a tabela conforme necessário
    await unidade.sync();
}

// Exporta a função 'defineAssociacoes' como o padrão deste módulo
// Isso permite que as associações sejam definidas e sincronizadas em outras partes do código
export default defineAssociacoes;
