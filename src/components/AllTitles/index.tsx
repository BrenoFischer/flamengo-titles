import TitleCategory from '../TitleCategory'
import { AllTitlesContainer } from './styles'

export default function AllTitles() {
  const libertadoresTitles = [
    { year: '1981', disabledLink: false },
    { year: '2019', disabledLink: false },
    { year: '2022', disabledLink: false },
  ]

  const worldTitles = [{ year: '1981', disabledLink: false }]

  const brasileiroTitles = [
    { year: '1980', disabledLink: true },
    { year: '1982', disabledLink: true },
    { year: '1983', disabledLink: true },
    { year: '1992', disabledLink: true },
    { year: '2009', disabledLink: false },
    { year: '2019', disabledLink: true },
    { year: '2020', disabledLink: false },
  ]

  const mercosulTitles = [{ year: '1999', disabledLink: true }]

  const copaDoBrasilTitles = [
    { year: '1990', disabledLink: true },
    { year: '2006', disabledLink: true },
    { year: '2013', disabledLink: true },
    { year: '2022', disabledLink: false },
  ]

  const cariocaTitles = [
    { year: '1914', disabledLink: true },
    { year: '1915', disabledLink: true },
    { year: '1920', disabledLink: true },
    { year: '1921', disabledLink: true },
    { year: '1925', disabledLink: true },
    { year: '1927', disabledLink: true },
    { year: '1939', disabledLink: true },
    { year: '1942', disabledLink: true },
    { year: '1943', disabledLink: true },
    { year: '1944', disabledLink: true },
    { year: '1953', disabledLink: true },
    { year: '1954', disabledLink: true },
    { year: '1955', disabledLink: true },
    { year: '1963', disabledLink: true },
    { year: '1965', disabledLink: true },
    { year: '1972', disabledLink: true },
    { year: '1974', disabledLink: true },
    { year: '1978', disabledLink: true },
    { year: '1979', disabledLink: true },
    { year: '1979.2', disabledLink: true },
    { year: '1981', disabledLink: true },
    { year: '1986', disabledLink: true },
    { year: '1991', disabledLink: true },
    { year: '1996', disabledLink: true },
    { year: '1999', disabledLink: true },
    { year: '2000', disabledLink: true },
    { year: '2001', disabledLink: false },
    { year: '2004', disabledLink: true },
    { year: '2007', disabledLink: true },
    { year: '2008', disabledLink: true },
    { year: '2009', disabledLink: true },
    { year: '2011', disabledLink: true },
    { year: '2014', disabledLink: true },
    { year: '2017', disabledLink: true },
    { year: '2019', disabledLink: true },
    { year: '2020', disabledLink: true },
    { year: '2021', disabledLink: true },
  ]

  return (
    <AllTitlesContainer>
      <ul>
        <TitleCategory category="Libertadores" titles={libertadoresTitles} />
        <TitleCategory category="Mundial" titles={worldTitles} />
        <TitleCategory category="Brasileiro" titles={brasileiroTitles} />
        <TitleCategory category="Copa Do Brasil" titles={copaDoBrasilTitles} />
        <TitleCategory category="Mercosul" titles={mercosulTitles} />
        <TitleCategory category="Carioca" titles={cariocaTitles} />
      </ul>
    </AllTitlesContainer>
  )
}
