export interface playerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
      overall: number,
      pacing: number,
      shooting: number,
      passing: number,
      dribbling: number,
      defending: number,
      physical: number,
    }
}

// {
//     "id": 22,
//     "name": "Marcos",
//     "club": "Real Madrid",
//     "nationality": "França",
//     "position": "Forward",
//     "statistics": {
//       "overall": 91,
//       "pacing": 97,
//       "shooting": 90,
//       "passing": 81,
//       "dribbling": 92,
//       "defending": 36,
//       "physical": 78
//     }
//   }