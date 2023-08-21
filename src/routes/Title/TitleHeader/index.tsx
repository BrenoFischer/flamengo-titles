import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

import {
  FlamengoLogoContainer,
  LanguageSelectorContainer,
  TitleHeaderContainer,
} from './styles'
import { LanguageContext } from '../../../contexts/LanguageContext'
import FlamengoLogo from '../../../assets/flamengo.png'

interface TitleHeaderProps {
  category: string
  year: string
  coverImg: string
}

export default function TitleHeader({
  category,
  year,
  coverImg,
}: TitleHeaderProps) {
  const { activeLanguage, changeActiveLanguage } = useContext(LanguageContext)

  return (
    <TitleHeaderContainer>
      <h1>
        {category} - {year}
      </h1>
      <img src={coverImg} alt="" />
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
      <FlamengoLogoContainer>
        <Link to="/">
          <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
        </Link>
      </FlamengoLogoContainer>
    </TitleHeaderContainer>
  )
}
