import { initializeApp } from 'firebase/app'
import { getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBwDHFfdMxVghAgTuAp0wmGBfmoxoD4xcA',
  authDomain: 'flamengo-26a20.firebaseapp.com',
  projectId: 'flamengo-26a20',
  storageBucket: 'flamengo-26a20.appspot.com',
  messagingSenderId: '794602550395',
  appId: '1:794602550395:web:9ae475f77f154d3aa69ede',
}

initializeApp(firebaseConfig)

export const db = getFirestore()

export const getTitleInformation = async (category: string, year: string) => {
  try {
    const ref = doc(db, 'titlesCategories', category.toLowerCase())
    const docSnap = await getDoc(ref)

    return docSnap.data()![year]
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export const saveNewChampionship = async (category: string) => {
  const docData = {
    2001: {
      coverImg:
        'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/torcida-flamengo4.webp?alt=media&token=dc3f1a25-eaef-4a8f-94d7-51de052f0c8a',
      roundRobin: false,
      resume: {
        en: 'Resume',
        pt: 'Resume pt',
      },
      finalRanking: {},
      // {
      //   1: {
      //     name: 'Flamengo',
      //     points: '71',
      //     gm: 68,
      //     gc: 48,
      //   },
      //   2: {
      //     name: 'Internacional',
      //     points: '70',
      //     gm: 61,
      //     gc: 35,
      //   },
      //   3: {
      //     name: 'Atlético-MG',
      //     points: '68',
      //     gm: 64,
      //     gc: 45,
      //   },
      //   4: {
      //     name: 'São Paulo',
      //     points: '66',
      //     gm: 59,
      //     gc: 41,
      //   },
      //   5: {
      //     name: 'Fluminense',
      //     points: '64',
      //     gm: 55,
      //     gc: 42,
      //   },
      //   6: {
      //     name: 'Grêmio',
      //     points: '59',
      //     gm: 53,
      //     gc: 40,
      //   },
      //   7: {
      //     name: 'Palmeiras',
      //     points: '58',
      //     gm: 51,
      //     gc: 37,
      //   },
      //   8: {
      //     name: 'Santos',
      //     points: '54',
      //     gm: 52,
      //     gc: 51,
      //   },
      //   9: {
      //     name: 'Athletico-PR',
      //     points: '53',
      //     gm: 38,
      //     gc: 36,
      //   },
      //   10: {
      //     name: 'Bragantino',
      //     points: '53',
      //     gm: 50,
      //     gc: 40,
      //   },
      //   11: {
      //     name: 'Ceará',
      //     points: '52',
      //     gm: 54,
      //     gc: 51,
      //   },
      //   12: {
      //     name: 'Corinthians',
      //     points: '51',
      //     gm: 45,
      //     gc: 45,
      //   },
      //   13: {
      //     name: 'Atlético-GO',
      //     points: '50',
      //     gm: 40,
      //     gc: 45,
      //   },
      //   14: {
      //     name: 'Bahia',
      //     points: '44',
      //     gm: 48,
      //     gc: 59,
      //   },
      //   15: {
      //     name: 'Sport',
      //     points: '42',
      //     gm: 31,
      //     gc: 50,
      //   },
      //   16: {
      //     name: 'Fortaleza',
      //     points: '41',
      //     gm: 34,
      //     gc: 44,
      //   },
      //   17: {
      //     name: 'Vasco',
      //     points: '41',
      //     gm: 37,
      //     gc: 56,
      //   },
      //   18: {
      //     name: 'Goiás',
      //     points: '37',
      //     gm: 41,
      //     gc: 63,
      //   },
      //   19: {
      //     name: 'Coritiba',
      //     points: '31',
      //     gm: 31,
      //     gc: 54,
      //   },
      //   20: {
      //     name: 'Botafogo',
      //     points: '27',
      //     gm: 31,
      //     gc: 54,
      //   },
      // },
      finalMatch: {
        countryCode: 'BR',
        score: '3x1',
        team: 'Vasco',
        date: '27/05/2001',
        stadium: {
          name: 'Maracanã',
          country: 'BR',
          location: 'Rio de Janeiro, Brasil',
          spectators: '60038',
        },
      },
      statistics: {
        avarageGoals: '3.16',
        flamengo: {
          defeats: '4',
          draws: '3',
          goalsAgainst: '16',
          goalsScored: '39',
          matchesPlayed: '20',
          wins: '13',
        },
        period: {
          from: new Date('2001-01-20').getTime(),
          to: new Date('2001-05-27').getTime(),
        },
        teamsQuantity: '12',
        topScorer: {
          goals: '16',
          player: 'Edílson',
          team: 'Flamengo',
        },
      },
      winningSquad: {
        coach: { name: 'Zagallo', country: 'BR' },
        photo:
          'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/winning-squad-carioca-2001.jpg?alt=media&token=a96f8b00-4397-4741-88d1-aa10de81d786',
        formation: '4-4-2',
        players: {
          1: {
            name: 'Julio César',
            number: '1',
            nationality: 'BR',
          },
          2: {
            name: 'Alessandro',
            number: '2',
            nationality: 'BR',
          },
          3: {
            name: 'Gamarra',
            number: '3',
            nationality: 'PY',
          },
          4: {
            name: 'Juan',
            number: '4',
            nationality: 'BR',
          },
          5: {
            name: 'Cássio',
            number: '6',
            nationality: 'BR',
          },
          6: {
            name: 'Leandro Ávila',
            number: '5',
            nationality: 'BR',
          },
          7: {
            name: 'Rocha',
            number: '9',
            nationality: 'BR',
          },
          8: {
            name: 'Beto',
            number: '7',
            nationality: 'BR',
          },
          9: {
            name: 'Petkovic',
            number: '10',
            nationality: 'RS',
          },
          10: {
            name: 'Edílson',
            number: '11',
            nationality: 'BR',
          },
          11: {
            name: 'Reinaldo',
            number: '8',
            nationality: 'BR',
          },
        },
      },
    },
  }

  await updateDoc(doc(db, 'titlesCategories', category), docData)
}
