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
    2022: {
      coverImg:
        'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/torcida-flamengo4.webp?alt=media&token=dc3f1a25-eaef-4a8f-94d7-51de052f0c8a',
      roundRobin: false,
      // finalRanking: {
      //   1: {
      //     name: 'Flamengo',
      //     points: '67',
      //     gm: 58,
      //     gc: 44,
      //   },
      //   2: {
      //     name: 'Internacional',
      //     points: '65',
      //     gm: 65,
      //     gc: 44,
      //   },
      //   3: {
      //     name: 'São Paulo',
      //     points: '65',
      //     gm: 57,
      //     gc: 42,
      //   },
      //   4: {
      //     name: 'Cruzeiro',
      //     points: '62',
      //     gm: 58,
      //     gc: 53,
      //   },
      //   5: {
      //     name: 'Palmeiras',
      //     points: '62',
      //     gm: 58,
      //     gc: 45,
      //   },
      //   6: {
      //     name: 'Avaí',
      //     points: '57',
      //     gm: 61,
      //     gc: 52,
      //   },
      //   7: {
      //     name: 'Atlético-MG',
      //     points: '56',
      //     gm: 55,
      //     gc: 56,
      //   },
      //   8: {
      //     name: 'Grêmio',
      //     points: '55',
      //     gm: 67,
      //     gc: 46,
      //   },
      //   9: {
      //     name: 'Goiás',
      //     points: '55',
      //     gm: 64,
      //     gc: 65,
      //   },
      //   10: {
      //     name: 'Corinthians',
      //     points: '52',
      //     gm: 50,
      //     gc: 54,
      //   },
      //   11: {
      //     name: 'Grêmio Barueri',
      //     points: '49',
      //     gm: 59,
      //     gc: 52,
      //   },
      //   12: {
      //     name: 'Santos',
      //     points: '49',
      //     gm: 58,
      //     gc: 58,
      //   },
      //   13: {
      //     name: 'Vitória',
      //     points: '48',
      //     gm: 51,
      //     gc: 57,
      //   },
      //   14: {
      //     name: 'Atlético-PR',
      //     points: '48',
      //     gm: 42,
      //     gc: 49,
      //   },
      //   15: {
      //     name: 'Botafogo',
      //     points: '47',
      //     gm: 52,
      //     gc: 58,
      //   },
      //   16: {
      //     name: 'Fluminense',
      //     points: '47',
      //     gm: 49,
      //     gc: 56,
      //   },
      //   17: {
      //     name: 'Coritiba',
      //     points: '45',
      //     gm: 48,
      //     gc: 60,
      //   },
      //   18: {
      //     name: 'Santo André',
      //     points: '41',
      //     gm: 46,
      //     gc: 61,
      //   },
      //   19: {
      //     name: 'Náutico',
      //     points: '38',
      //     gm: 48,
      //     gc: 71,
      //   },
      //   20: {
      //     name: 'Sport',
      //     points: '31',
      //     gm: 48,
      //     gc: 71,
      //   },
      // },
      finalMatch: {
        countryCode: 'BR',
        score: '1(6)x1(5)',
        team: 'Corinthians',
        date: '19/10/2022',
        stadium: {
          name: 'Maracanã',
          country: 'BR',
          location: 'Rio de Janeiro, Brasil',
          spectators: '61566',
        },
      },
      topScorer: {
        goals: '5',
        player: 'Cano',
        team: 'Fluminense',
      },
      winningSquad: {
        coach: { name: 'Dorival Júnior', country: 'BR' },
        photo:
          'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/winning-squad-copaDoBrasil-2022.jpeg?alt=media&token=0e2a768d-5e54-47a7-9af6-427cda1d5470',
        formation: '4-3-3',
        players: {
          1: {
            name: 'Santos',
            number: '1',
            nationality: 'BR',
          },
          2: {
            name: 'Rodinei',
            number: '22',
            nationality: 'BR',
          },
          3: {
            name: 'David Luiz',
            number: '23',
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
            name: 'João Gomes',
            number: '35',
            nationality: 'BR',
          },
          9: {
            name: 'Arrascaeta',
            number: '14',
            nationality: 'BR',
          },
          10: {
            name: 'Pedro',
            number: '21',
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
