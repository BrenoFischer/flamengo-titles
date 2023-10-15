import { useContext } from 'react'
import ReactCountryFlag from 'react-country-flag'

import FlamengoLogo from '../../assets/flamengo.png'
import SmokeVideo from '../../assets/smoke-background2.mp4'
import Poster from '../../assets/poster.png'

import {
  HeaderContainer,
  LanguageSelectorContainer,
  LogoContainer,
  Scratch,
} from './styles'
import { LanguageContext } from '../../contexts/LanguageContext'

export default function Header() {
  const { activeLanguage, changeActiveLanguage } = useContext(LanguageContext)

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
      </LogoContainer>
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
      <video playsInline autoPlay loop muted preload="none" poster={Poster}>
        <source src={SmokeVideo} type="video/mp4" />
      </video>
      <Scratch />
      <h1>Flamengo</h1>
      <Scratch $isBottom={true} />
      <h2>
        {activeLanguage === 'PT'
          ? 'Conheça as principais glórias do Flamengo ao longo de mais um século de história'
          : 'Discover the main glories of Flamengo throughout another century of history.'}
      </h2>
    </HeaderContainer>
  )
}
