import express from "express";
import { router } from "./routes/routes";


export function createApp(){
    const app = express()
    
    app.use(express.json())

    // config rotas prefixo
    app.use("/api", router);
    
    return app;
}