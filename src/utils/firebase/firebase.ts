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
  const ref = doc(db, 'titlesCategories', category.toLowerCase())
  const docSnap = await getDoc(ref)

  return docSnap.data()![year]
}

export const saveNewChampionship = async (category: string) => {
  const docData = {
    2009: {
      coverImg:
        'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/torcida-flamengo4.webp?alt=media&token=dc3f1a25-eaef-4a8f-94d7-51de052f0c8a',
      roundRobin: true,
      finalRanking: {
        1: {
          name: 'Flamengo',
          points: '67',
          gm: 58,
          gc: 44,
        },
        2: {
          name: 'Internacional',
          points: '65',
          gm: 65,
          gc: 44,
        },
        3: {
          name: 'São Paulo',
          points: '65',
          gm: 57,
          gc: 42,
        },
        4: {
          name: 'Cruzeiro',
          points: '62',
          gm: 58,
          gc: 53,
        },
        5: {
          name: 'Palmeiras',
          points: '62',
          gm: 58,
          gc: 45,
        },
        6: {
          name: 'Avaí',
          points: '57',
          gm: 61,
          gc: 52,
        },
        7: {
          name: 'Atlético-MG',
          points: '56',
          gm: 55,
          gc: 56,
        },
        8: {
          name: 'Grêmio',
          points: '55',
          gm: 67,
          gc: 46,
        },
        9: {
          name: 'Goiás',
          points: '55',
          gm: 64,
          gc: 65,
        },
        10: {
          name: 'Corinthians',
          points: '52',
          gm: 50,
          gc: 54,
        },
        11: {
          name: 'Grêmio Barueri',
          points: '49',
          gm: 59,
          gc: 52,
        },
        12: {
          name: 'Santos',
          points: '49',
          gm: 58,
          gc: 58,
        },
        13: {
          name: 'Vitória',
          points: '48',
          gm: 51,
          gc: 57,
        },
        14: {
          name: 'Atlético-PR',
          points: '48',
          gm: 42,
          gc: 49,
        },
        15: {
          name: 'Botafogo',
          points: '47',
          gm: 52,
          gc: 58,
        },
        16: {
          name: 'Fluminense',
          points: '47',
          gm: 49,
          gc: 56,
        },
        17: {
          name: 'Coritiba',
          points: '45',
          gm: 48,
          gc: 60,
        },
        18: {
          name: 'Santo André',
          points: '41',
          gm: 46,
          gc: 61,
        },
        19: {
          name: 'Náutico',
          points: '38',
          gm: 48,
          gc: 71,
        },
        20: {
          name: 'Sport',
          points: '31',
          gm: 48,
          gc: 71,
        },
      },
      finalMatch: {
        countryCode: 'BR',
        score: '2x1',
        team: 'Grêmio',
        stadium: {
          name: 'Maracanã',
          country: 'BR',
          location: 'Rio de Janeiro, Brasil',
          spectators: '78639',
        },
      },
      topScorer: {
        goals: '19',
        player: 'Adriano',
        team: 'Flamengo',
      },
      winningSquad: {
        coach: { name: 'Andrade', country: 'BR' },
        photo:
          'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/winning-squad-brasileiro-2009.webp?alt=media&token=c571ce35-0be9-43c3-8bf9-1b206990ba0f',
        formation: '4-3-3',
        players: {
          1: {
            name: 'Bruno',
            number: '1',
            nationality: 'BR',
          },
          2: {
            name: 'Léo Moura',
            number: '2',
            nationality: 'BR',
          },
          3: {
            name: 'Álvaro',
            number: '14',
            nationality: 'BR',
          },
          4: {
            name: 'Ronaldo Angelim',
            number: '4',
            nationality: 'BR',
          },
          5: {
            name: 'Juan',
            number: '5',
            nationality: 'BR',
          },
          6: {
            name: 'Airton',
            number: '6',
            nationality: 'BR',
          },
          7: {
            name: 'Willians',
            number: '8',
            nationality: 'BR',
          },
          8: {
            name: 'Maldonado',
            number: '13',
            nationality: 'CL',
          },
          9: {
            name: 'Petkovic',
            number: '43',
            nationality: 'RS',
          },
          10: {
            name: 'Adriano',
            number: '10',
            nationality: 'BR',
          },
          11: {
            name: 'Zé Roberto',
            number: '26',
            nationality: 'BR',
          },
        },
      },
    },
  }

  await updateDoc(doc(db, 'titlesCategories', category), docData)
}
