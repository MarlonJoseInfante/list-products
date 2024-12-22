import express, { Application } from 'express';

class Server{

    private app: Application;
    private port: string;

    constructor(){
        this.app= express();
        this.port= '3001';
        this.listen();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`The application is running on port ${this.port}`);
        })
    }
}

export default Server;