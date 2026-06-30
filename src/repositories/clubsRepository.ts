import { clubModel } from "../models/clubModel";
import fs from "fs/promises"

const language = "utf-8";

export const findAllClubs = async ():Promise <clubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", language);
    const clubs: clubModel[] = JSON.parse(data);
    return clubs;
}