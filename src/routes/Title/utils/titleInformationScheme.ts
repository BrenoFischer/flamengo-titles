import { Timestamp } from 'firebase/firestore'

interface PlayerType {
  name: string
  number: string
  nationality: string
}

export interface WinningSquadPlayers {
  1: PlayerType
  2: PlayerType
  3: PlayerType
  4: PlayerType
  5: PlayerType
  6: PlayerType
  7: PlayerType
  8: PlayerType
  9: PlayerType
  10: PlayerType
  11: PlayerType
}

interface TeamFromFinalRanking {
  name: string
  points: string
  gc: number
  gm: number
}

export interface FinalRanking {
  1: TeamFromFinalRanking
  2: TeamFromFinalRanking
  3: TeamFromFinalRanking
  4: TeamFromFinalRanking
  5: TeamFromFinalRanking
  6: TeamFromFinalRanking
  7: TeamFromFinalRanking
  8: TeamFromFinalRanking
  9: TeamFromFinalRanking
  10: TeamFromFinalRanking
  11: TeamFromFinalRanking
  12: TeamFromFinalRanking
  13: TeamFromFinalRanking
  14: TeamFromFinalRanking
  15: TeamFromFinalRanking
  16: TeamFromFinalRanking
  17: TeamFromFinalRanking
  18: TeamFromFinalRanking
  19: TeamFromFinalRanking
  20: TeamFromFinalRanking
}

interface Stadium {
  name: string
  country: string
  location: string
  spectators: string
}

export interface TitleInformation {
  coverImg: string
  roundRobin: boolean
  resume: { en: string; pt: string }
  finalMatch: {
    score: string
    team: string
    countryCode: string
    stadium: Stadium
    date: string
  }
  finalRanking: FinalRanking
  statistics: {
    teamsQuantity: string
    period: { from: Timestamp; to: Timestamp }
    avarageGoals: string
    flamengo: {
      defeats: string
      draws: string
      wins: string
      goalsAgainst: string
      goalsScored: string
      matchesPlayed: string
    }
    topScorer: {
      player: string
      team: string
      goals: string
    }
  }
  winningSquad: {
    formation: string
    photo: string
    coach: { name: string; country: string }
    players: WinningSquadPlayers
  }
  highlightPlayer: {
    hasHighlightPlayer: boolean
    photo: string
    player: {
      name: string
      country: string
      position: {
        pt: string
        en: string
      }
    }
  }
}

export const titleInformationScheme = {
  coverImg: '',
  finalMatch: {
    score: '',
    team: '',
    countryCode: '',
    date: '',
    stadium: { name: '', country: '', location: '', spectators: '' },
  },
  finalRanking: {
    1: { name: '', points: '', gc: 0, gm: 0 },
    2: { name: '', points: '', gc: 0, gm: 0 },
    3: { name: '', points: '', gc: 0, gm: 0 },
    4: { name: '', points: '', gc: 0, gm: 0 },
    5: { name: '', points: '', gc: 0, gm: 0 },
    6: { name: '', points: '', gc: 0, gm: 0 },
    7: { name: '', points: '', gc: 0, gm: 0 },
    8: { name: '', points: '', gc: 0, gm: 0 },
    9: { name: '', points: '', gc: 0, gm: 0 },
    10: { name: '', points: '', gc: 0, gm: 0 },
    11: { name: '', points: '', gc: 0, gm: 0 },
    12: { name: '', points: '', gc: 0, gm: 0 },
    13: { name: '', points: '', gc: 0, gm: 0 },
    14: { name: '', points: '', gc: 0, gm: 0 },
    15: { name: '', points: '', gc: 0, gm: 0 },
    16: { name: '', points: '', gc: 0, gm: 0 },
    17: { name: '', points: '', gc: 0, gm: 0 },
    18: { name: '', points: '', gc: 0, gm: 0 },
    19: { name: '', points: '', gc: 0, gm: 0 },
    20: { name: '', points: '', gc: 0, gm: 0 },
  },
  resume: { en: '', pt: '' },
  roundRobin: false,
  statistics: {
    teamsQuantity: '',
    period: { from: new Timestamp(0, 0), to: new Timestamp(0, 0) },
    avarageGoals: '',
    flamengo: {
      defeats: '',
      draws: '',
      wins: '',
      goalsAgainst: '',
      goalsScored: '',
      matchesPlayed: '',
    },
    topScorer: {
      player: '',
      team: '',
      goals: '',
    },
  },
  winningSquad: {
    formation: '',
    photo: '',
    coach: { name: '', country: '' },
    players: {
      1: { name: '', nationality: '', number: '' },
      2: { name: '', nationality: '', number: '' },
      3: { name: '', nationality: '', number: '' },
      4: { name: '', nationality: '', number: '' },
      5: { name: '', nationality: '', number: '' },
      6: { name: '', nationality: '', number: '' },
      7: { name: '', nationality: '', number: '' },
      8: { name: '', nationality: '', number: '' },
      9: { name: '', nationality: '', number: '' },
      10: { name: '', nationality: '', number: '' },
      11: { name: '', nationality: '', number: '' },
    },
  },
  highlightPlayer: {
    hasHighlightPlayer: false,
    photo: '',
    player: {
      name: '',
      country: '',
      position: {
        pt: '',
        en: '',
      },
    },
  },
}
