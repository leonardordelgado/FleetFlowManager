import ICLiente from "../interfaces/InterfaceCliente"
export default new class ServicesClientes{
    async serviceGetClientes(){
        try {
            return {
                id:1,
                Cliente:"Labs A+"
            }
        } catch (error) {
            throw new Error(`rro ao buscar clientes ++++++${error}`)
        }
    }
}