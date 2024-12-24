import express, { Application, Request, Response } from 'express';
import routeProduct from '../routes/product';

class Server{

    private app: Application;
    private port: string;

    constructor(){
        this.app= express();
        this.port= process.env.PORT || '3001' ;
        this.listen();
        //esta funcion debe ser invocada antes de los routes para que funcione:
        this.middleware();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`The application is running on port ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response )=>{
            res.json({
                message: 'API is working'
            });
        })
        this.app.use('/api/products', routeProduct);
    }

    middleware(){
        this.app.use(express.json());
    }
}

export default Server;