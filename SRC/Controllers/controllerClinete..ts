import { Request, Response } from 'express';
import ICLiente from '../interfaces/InterfaceCliente';
import servicesClientes from '../Services/servicesClientes';

class ControllersCliente {
    static async GetCliente(req:Request, res:Response){
        try {
            const clientes: ICLiente = await servicesClientes.serviceGetClientes()
            res.status(201).json(clientes)
        } catch (error) {
            res.status(500).send(`Erro encontrado na requisição +++++++${error}`)
        }
    }

}

export default ControllersCliente;