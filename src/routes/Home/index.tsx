import AllTitles from '../../components/AllTitles'
import Header from '../../components/Header'
import ChronologicalCarousel from './ChronologicalCarousel'
// import { saveNewChampionship } from '../../utils/firebase/firebase'

export default function Home() {
  // async function handleAddNewSquad() {
  //   await saveNewChampionship('carioca')
  // }

  return (
    <>
      <Header />
      <ChronologicalCarousel />
      {/* <button onClick={handleAddNewSquad}>Add squad</button> */}
      <AllTitles />
    </>
  )
}
