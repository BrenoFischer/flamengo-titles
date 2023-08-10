import TitleCategory from '../TitleCategory'
import { AllTitlesContainer } from './styles'

export default function AllTitles() {
  const libertadoresTitles = ['1981', '2019', '2022']
  const brasileiroTitles = [
    '1992',
    '2009',
    '2019',
    '1993',
    '2008',
    '2012',
    '1991',
    '2010',
    '2011',
  ]

  return (
    <AllTitlesContainer>
      <h1>
        Conheça as principais glórias do Flamengo ao longo de mais um século de
        história:
      </h1>
      <ul>
        <TitleCategory category="Libertadores" titles={libertadoresTitles} />
        <TitleCategory category="Brasileiro" titles={brasileiroTitles} />
      </ul>
    </AllTitlesContainer>
  )
}
