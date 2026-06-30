import * as httpResponse from "../utils/httpHelper"
import { deletePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/playersRepository";
import { playerModel } from "../models/playerModel";
import { statisticsModel } from "../models/statisticsModel";

export const getPlayerService = async () =>{
    const data = await findAllPlayers();
    let response = null;
    
    if(data){
       response = await httpResponse.ok(data)
    }else{
       response = await httpResponse.noContent()
    }


    return response;
}

export const getPlayerByidService = async (id:number) => {
   // pedir ao repositório de dados
   const data = await findPlayerById(id);
   let response = null

   // caso tenha conteudo na data, guarda ok no response, se não, guarda noContent.
   if(data){
      response = await httpResponse.ok(data);
   }else {
      response = await httpResponse.noContent();
   }
   return response;
}

export const createPlayerService = async (player: playerModel) =>{
   let response = null

   // verifica se está vazio o objeto
   if(Object.keys(player).length !== 0){
      response = await insertPlayer(player)
      response = await httpResponse.created();
   }else{
      response = await httpResponse.badRequest();
   }
   return response;
}

export const deletePlayerService = async (id:number) =>{
   let response = null;
   await deletePlayer(id);
   const isDeleted = await deletePlayer(id)

   if(isDeleted){
      response = await httpResponse.ok({message : "deleted"})
   }else {
      response = await httpResponse.badRequest();
   }

   return response;
}

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
   const data = await findAndModifyPlayer(id,statistics);
   let response = null;

   if(Object.keys(data).length === 0){
       response = await httpResponse.badRequest();
   }else{
      response = await httpResponse.ok(data);  
   }

   return response;
}