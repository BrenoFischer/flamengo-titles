import AllTitles from '../../components/AllTitles'
import Header from '../../components/Header'
import { saveNewChampionship } from '../../utils/firebase/firebase'

export default function Home() {
  async function handleAddNewSquad() {
    await saveNewChampionship('copadobrasil')
  }

  return (
    <>
      <Header />
      <button onClick={handleAddNewSquad}>Add squad</button>
      <AllTitles />
    </>
  )
}
