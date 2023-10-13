import { useContext } from 'react'

import ReactCountryFlag from 'react-country-flag'

import FlamengoLogo from '../../assets/flamengo.png'
import CoverPhoto from '../../assets/cover.jpg'
import { LanguageContext } from '../../contexts/LanguageContext'

import {
  CoverHeader,
  LanguageSelectorContainer,
  LowerHeader,
  UpperHeader,
} from './styles'

export default function Header() {
  const { activeLanguage, changeActiveLanguage } = useContext(LanguageContext)

  return (
    <header>
      <UpperHeader>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
      </UpperHeader>
      <LowerHeader>
        <LanguageSelectorContainer>
          <ReactCountryFlag
            onClick={() => changeActiveLanguage('PT')}
            svg
            countryCode={'BR'}
            style={{
              fontSize: '2.2rem',
              cursor: 'pointer',
              borderBottom:
                activeLanguage === 'PT'
                  ? '3px solid white'
                  : '3px solid transparent',
              padding: '0 0.1rem',
            }}
          />
          <ReactCountryFlag
            onClick={() => changeActiveLanguage('EN')}
            svg
            countryCode={'US'}
            style={{
              fontSize: '2.2rem',
              cursor: 'pointer',
              borderBottom:
                activeLanguage === 'EN'
                  ? '3px solid white'
                  : '3px solid transparent',
              padding: '0 0.1rem',
            }}
          />
        </LanguageSelectorContainer>
      </LowerHeader>
      <CoverHeader coverPhoto={CoverPhoto}>
        <h1>
          {activeLanguage === 'PT'
            ? 'Conheça as principais glórias do Flamengo ao longo de mais um século de história'
            : 'Discover the main glories of Flamengo throughout another century of history.'}
        </h1>
      </CoverHeader>
    </header>
  )
}
