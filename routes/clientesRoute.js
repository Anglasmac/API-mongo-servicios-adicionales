import  Router from 'express'

const routesClientes =Router()
import { getClientes, postClientes, putClientes, deleteClientes } from '../controllers/clientesControllers.js';

routesClientes.get('/',getClientes)
routesClientes.post('/',postClientes)
routesClientes.put('/',putClientes)
routesClientes.delete('/',deleteClientes)

export default routesClientes
