import  Router from 'express'

const routesServicios =Router()
import { getServicios, postServicios, putServicios, deleteServicios } from '../controllers/serviciosControllers.js';

routesServicios.get('/',getServicios)
routesServicios.post('/',postServicios)
routesServicios.put('/',putServicios)
routesServicios.delete('/',deleteServicios)

export default routesServicios
