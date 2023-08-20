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
    2020: {
      coverImg:
        'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/torcida-flamengo4.webp?alt=media&token=dc3f1a25-eaef-4a8f-94d7-51de052f0c8a',
      roundRobin: true,
      finalRanking: {
        1: {
          name: 'Flamengo',
          points: '71',
          gm: 68,
          gc: 48,
        },
        2: {
          name: 'Internacional',
          points: '70',
          gm: 61,
          gc: 35,
        },
        3: {
          name: 'Atlético-MG',
          points: '68',
          gm: 64,
          gc: 45,
        },
        4: {
          name: 'São Paulo',
          points: '66',
          gm: 59,
          gc: 41,
        },
        5: {
          name: 'Fluminense',
          points: '64',
          gm: 55,
          gc: 42,
        },
        6: {
          name: 'Grêmio',
          points: '59',
          gm: 53,
          gc: 40,
        },
        7: {
          name: 'Palmeiras',
          points: '58',
          gm: 51,
          gc: 37,
        },
        8: {
          name: 'Santos',
          points: '54',
          gm: 52,
          gc: 51,
        },
        9: {
          name: 'Athletico-PR',
          points: '53',
          gm: 38,
          gc: 36,
        },
        10: {
          name: 'Bragantino',
          points: '53',
          gm: 50,
          gc: 40,
        },
        11: {
          name: 'Ceará',
          points: '52',
          gm: 54,
          gc: 51,
        },
        12: {
          name: 'Corinthians',
          points: '51',
          gm: 45,
          gc: 45,
        },
        13: {
          name: 'Atlético-GO',
          points: '50',
          gm: 40,
          gc: 45,
        },
        14: {
          name: 'Bahia',
          points: '44',
          gm: 48,
          gc: 59,
        },
        15: {
          name: 'Sport',
          points: '42',
          gm: 31,
          gc: 50,
        },
        16: {
          name: 'Fortaleza',
          points: '41',
          gm: 34,
          gc: 44,
        },
        17: {
          name: 'Vasco',
          points: '41',
          gm: 37,
          gc: 56,
        },
        18: {
          name: 'Goiás',
          points: '37',
          gm: 41,
          gc: 63,
        },
        19: {
          name: 'Coritiba',
          points: '31',
          gm: 31,
          gc: 54,
        },
        20: {
          name: 'Botafogo',
          points: '27',
          gm: 31,
          gc: 54,
        },
      },
      finalMatch: {
        countryCode: 'BR',
        score: '1x2',
        team: 'São Paulo',
        date: '26/02/2021',
        stadium: {
          name: 'Morumbi',
          country: 'BR',
          location: 'São Paulo, Brasil',
          spectators: '0',
        },
      },
      topScorer: {
        goals: '18',
        player: 'Claudinho',
        team: 'Bragantino',
      },
      winningSquad: {
        coach: { name: 'Rogério Ceni', country: 'BR' },
        photo:
          'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/winning-squad-brasileiro-2020.jpg?alt=media&token=0c5acca1-0ef5-419c-bd60-92314f3f4354',
        formation: '4-4-2',
        players: {
          1: {
            name: 'Hugo Souza',
            number: '45',
            nationality: 'BR',
          },
          2: {
            name: 'Isla',
            number: '44',
            nationality: 'CL',
          },
          3: {
            name: 'Rodrigo Caio',
            number: '3',
            nationality: 'BR',
          },
          4: {
            name: 'Léo Pereira',
            number: '4',
            nationality: 'BR',
          },
          5: {
            name: 'Filipe Luís',
            number: '16',
            nationality: 'BR',
          },
          6: {
            name: 'Thiago Maia',
            number: '8',
            nationality: 'BR',
          },
          7: {
            name: 'Everton Ribeiro',
            number: '7',
            nationality: 'BR',
          },
          8: {
            name: 'Gerson',
            number: '35',
            nationality: 'BR',
          },
          9: {
            name: 'Arrascaeta',
            number: '14',
            nationality: 'UY',
          },
          10: {
            name: 'Bruno Henrique',
            number: '27',
            nationality: 'BR',
          },
          11: {
            name: 'Gabi',
            number: '9',
            nationality: 'BR',
          },
        },
      },
    },
  }

  await updateDoc(doc(db, 'titlesCategories', category), docData)
}
