import { playerModel } from "../models/playerModel";
import { statisticsModel } from "../models/statisticsModel";

const database : playerModel[] = [
  {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "França",
    position: "Forward",
    statistics: {
      overall: 91,
      pacing: 97,
      shooting: 90,
      passing: 81,
      dribbling: 92,
      defending: 36,
      physical: 78,
    },
  },
  {
    id: 2,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Noruega",
    position: "Forward",
    statistics: {
      overall: 91,
      pacing: 89,
      shooting: 94,
      passing: 66,
      dribbling: 81,
      defending: 45,
      physical: 91,
    },
  },
  {
    id: 3,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brasil",
    position: "Forward",
    statistics: {
      overall: 90,
      pacing: 95,
      shooting: 84,
      passing: 81,
      dribbling: 93,
      defending: 30,
      physical: 70,
    },
  },
  {
    id: 4,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "Inglaterra",
    position: "Midfielder",
    statistics: {
      overall: 90,
      pacing: 81,
      shooting: 84,
      passing: 86,
      dribbling: 88,
      defending: 78,
      physical: 84,
    },
  },
  {
    id: 5,
    name: "Rodri",
    club: "Manchester City",
    nationality: "Espanha",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pacing: 67,
      shooting: 80,
      passing: 88,
      dribbling: 84,
      defending: 87,
      physical: 86,
    },
  },
  {
    id: 6,
    name: "Harry Kane",
    club: "Bayern München",
    nationality: "Inglaterra",
    position: "Forward",
    statistics: {
      overall: 90,
      pacing: 69,
      shooting: 93,
      passing: 84,
      dribbling: 83,
      defending: 49,
      physical: 83,
    },
  },
  {
    id: 7,
    name: "Bukayo Saka",
    club: "Arsenal",
    nationality: "Inglaterra",
    position: "Winger",
    statistics: {
      overall: 88,
      pacing: 91,
      shooting: 85,
      passing: 83,
      dribbling: 89,
      defending: 62,
      physical: 74,
    },
  },
  {
    id: 8,
    name: "Lautaro Martínez",
    club: "Inter",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 89,
      pacing: 82,
      shooting: 89,
      passing: 76,
      dribbling: 87,
      defending: 44,
      physical: 84,
    },
  },
  {
    id: 9,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egito",
    position: "Winger",
    statistics: {
      overall: 89,
      pacing: 91,
      shooting: 88,
      passing: 82,
      dribbling: 89,
      defending: 45,
      physical: 75,
    },
  },
  {
    id: 10,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Holanda",
    position: "Defender",
    statistics: {
      overall: 89,
      pacing: 78,
      shooting: 60,
      passing: 72,
      dribbling: 70,
      defending: 91,
      physical: 90,
    },
  }
];

export const findAllPlayers = async (): Promise<playerModel[]> =>{
    return database;
}

export const findPlayerById = async (id: number): Promise<playerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: playerModel) => {
  database.push(player);
}

export const deletePlayer = async (id:number) =>{
  const index = database.findIndex(p => p.id === id);

  if(index !== -1){
    database.splice(index, 1)
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async(id:number, statistics: statisticsModel) =>{
  // find player
  const playerIndex = database.findIndex(p => p.id === id);

  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
}