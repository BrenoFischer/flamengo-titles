import AllTitles from '../../components/AllTitles'
import BackgroundImageParallax from '../../components/BackgroundImageParallax'
import Header from '../../components/Header'
import ChronologicalCarousel from './ChronologicalCarousel'
import ZicoPhoto from '../../assets/best-players/best-player-libertadores-1981.png'

// import { saveNewChampionship } from '../../utils/firebase/firebase'

export default function Home() {
  // async function handleAddNewSquad() {
  //   await saveNewChampionship('carioca')
  // }

  return (
    <>
      <Header />
      <BackgroundImageParallax image={ZicoPhoto} speed={['0%', '300%']} />
      <ChronologicalCarousel />
      {/* <button onClick={handleAddNewSquad}>Add squad</button> */}
      <AllTitles />
    </>
  )
}
