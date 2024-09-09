import express, { json } from 'express';
import dbConnection from '../database/config.js';
import 'dotenv/config';
// import { getServicios, postServicios, putServicios, deleteServicios } from '../controllers/serviciosControllers.js';
import routesServicios from '../routes/serviciosRoute.js'
import routesClientes from '../routes/clientesRoute.js';

class Server{
    constructor(){
        this.app= express();
        this.listen();
        this.dbConnection();
        this.route();
        // this.port = 3000;
        
    }
    async dbConnection(){
        await dbConnection()
    }
    route(){
        this.app.use(json())

       this.app.use('/api/servicios',routesServicios)
       this.app.use('/api/servicios',routesClientes)
       

    }

    listen(){//dice donde esta corriendo el puerto con el metodo listen 
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
  }
}

export default Server;
