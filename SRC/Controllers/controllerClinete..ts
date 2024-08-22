import { Request, Response } from 'express';
import ICLiente from '../interfaces/InterfaceCliente';
import servicesClientes from '../Services/servicesClientes';

class ControllersCliente {
    static async GetCliente(req:Request, res:Response):Promise<void>{
        try {
            const clientes: ICLiente[] = await servicesClientes.getClientes()
            res.status(201).json(clientes)
        } catch (error) {
            res.status(500).send(`Erro encontrado na requisição +++++++${error}`)
        }
    }

    static async GetNomeCliente(req:Request, res:Response):Promise<void>{
        try {
            const {nome} = req.params;
            console.log({nome})
            const cliente: ICLiente = await servicesClientes.getNameCliente(nome)
            res.status(201).json(cliente)
        } catch (error) {
            res.status(500).send(`Erro encontrado na requisição +++++++${error}`)
        }
    }
}

export default ControllersCliente;