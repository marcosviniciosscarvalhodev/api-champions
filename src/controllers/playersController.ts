
import {Request, Response} from "express";
import * as service from "../services/playersService";
import { noContent } from "../utils/httpHelper";
import { statisticsModel } from "../models/statisticsModel";


export const getPlayer = async (req: Request, res: Response) => {
        const httpResponse = await service.getPlayerService();
            res.status(httpResponse.statusCode).json(httpResponse.body)
        }   

export const getPlayerByid = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await service.getPlayerByidService(id);
     res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async(req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await service.createPlayerService(bodyValue);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body)
    }

}

export const deletePlayer = async(req: Request, res: Response) =>{
    const id = Number(req.params.id);
    const httpResponse = await service.deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async(req: Request, res: Response) =>{
    const id = Number(req.params.id);
    const bodyValue: statisticsModel = req.body;
    const httpResponse = await service.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body)
}
