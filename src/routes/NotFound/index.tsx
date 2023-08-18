import { useContext } from 'react'
import { LanguageSelectorContainer, PageNotFoundContainer } from './styles'
import FlamengoLogo from '../../assets/flamengo.png'
import { LanguageContext } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

export default function NotFound() {
  const { activeLanguage, changeActiveLanguage } = useContext(LanguageContext)

  return (
    <PageNotFoundContainer>
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
                ? '3px solid black'
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
                ? '3px solid black'
                : '3px solid transparent',
            padding: '0 0.1rem',
          }}
        />
      </LanguageSelectorContainer>
      <Link to="/">
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
      </Link>
      <h2>
        {activeLanguage === 'PT' ? 'Página não encontrada' : 'Page not found'}
      </h2>
      <p>
        {activeLanguage === 'PT'
          ? 'Para explorar os títulos do flamengo, volte para a '
          : "To explore Flamengo's titles, go back to "}
        <Link to="/">Home</Link>
      </p>
    </PageNotFoundContainer>
  )
}
