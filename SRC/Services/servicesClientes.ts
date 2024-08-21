import ICliente from '../interfaces/InterfaceCliente';
import cliente from '../database/models/clientes';

export default new class ServicesClientes {
    async getClientes(): Promise<ICliente[]> {
        try {
            const resposta: ICliente[] = (await cliente.findAll({
                attributes: ['id', 'nome'] 
            })).map(cliente => ({
                id: cliente.dataValues.id,
                nome: cliente.dataValues.nome
            }));
            return resposta;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error); 
            throw new Error('Não foi possível buscar os clientes.');
        }
    }

    
}
