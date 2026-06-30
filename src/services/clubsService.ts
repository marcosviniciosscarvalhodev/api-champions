import { findAllClubs } from "../repositories/clubsRepository";
import * as httpResponse from "../utils/httpHelper";

export const getClubService = async () =>{
    const data = await findAllClubs
    const response = await httpResponse.ok(data)
    return response;
};