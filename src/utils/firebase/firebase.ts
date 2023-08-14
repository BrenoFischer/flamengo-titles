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
    2019: {
      coverImg:
        'https://firebasestorage.googleapis.com/v0/b/flamengo-26a20.appspot.com/o/torcida-flamengo4.webp?alt=media&token=dc3f1a25-eaef-4a8f-94d7-51de052f0c8a',
      finalMatch: {
        countryCode: 'AR',
        score: '2x1',
        team: 'River Plate',
      },
      topScorer: {
        goals: '9',
        player: 'Gabi',
        team: 'Flamengo',
      },
      winningSquad: {
        coach: 'Jorge Jesus',
        formation: '4-3-3',
        players: {
          1: {
            name: 'Diego Alves',
            number: '1',
            nationality: 'BR',
          },
          2: {
            name: 'Rafinha',
            number: '18',
            nationality: 'BR',
          },
          3: {
            name: 'Rodrigo Caio',
            number: '3',
            nationality: 'BR',
          },
          4: {
            name: 'Pablo Marí',
            number: '24',
            nationality: 'ES',
          },
          5: {
            name: 'Filipe Luís',
            number: '21',
            nationality: 'BR',
          },
          6: {
            name: 'Gerson',
            number: '15',
            nationality: 'BR',
          },
          7: {
            name: 'William Arão',
            number: '5',
            nationality: 'BR',
          },
          8: {
            name: 'Arrascaeta',
            number: '14',
            nationality: 'UY',
          },
          9: {
            name: 'Everton Ribeiro',
            number: '7',
            nationality: 'BR',
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
