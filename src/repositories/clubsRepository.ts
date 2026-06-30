import { playerModel } from "../models/playerModel";
import { clubModel } from "../models/clubModel";

const database = [
    {
        id: 1,
        name: "Real Madrid"
    },
];

export const findAllClubs = async ():Promise <clubModel[]> => {
    return database;
}