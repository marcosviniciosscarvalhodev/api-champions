import express from "express";
import { router } from "./routes/routes";
import cors from "cors";


export function createApp(){
    const app = express()
    
    app.use(express.json())

    // config rotas prefixo
    app.use("/api", router);

    app.use(cors())
    
    return app;
}