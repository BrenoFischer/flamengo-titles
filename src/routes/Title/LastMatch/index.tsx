import ReactCountryFlag from 'react-country-flag'
import { useContext } from 'react'

import { MdOutlineStadium } from 'react-icons/md'
import { BsCalendarDate } from 'react-icons/bs'

import { DateContainer, LastMatchContainer, StadiumContainer } from './styles'
import { TitleSectionHeader } from '..'
import { LanguageContext } from '../../../contexts/LanguageContext'

interface LastMatchProps {
  score: string
  team: string
  teamCountry: string
  spectators: string
  stadium: string
  location: string
  stadiumCountry: string
  date: string
}

export default function LastMatch({
  score,
  team,
  teamCountry,
  spectators,
  stadium,
  location,
  stadiumCountry,
  date,
}: LastMatchProps) {
  const { activeLanguage } = useContext(LanguageContext)

  return (
    <LastMatchContainer>
      <TitleSectionHeader
        ptText="Final"
        enText="Last Match"
        activeLanguage={activeLanguage}
      />
      <div>
        <ReactCountryFlag svg countryCode="BR" style={{ width: '2rem' }} />
        <h3>
          Flamengo
          <span>{score}</span> {team}
        </h3>
        <ReactCountryFlag
          svg
          countryCode={teamCountry}
          style={{ width: '2rem' }}
        />
      </div>
      <StadiumContainer>
        <MdOutlineStadium />
        <span>{spectators}</span>{' '}
        {activeLanguage === 'PT' ? 'Espectadores' : 'Spectators'} -{' '}
        <span>{stadium}</span> - {location}
        <ReactCountryFlag
          svg
          countryCode={stadiumCountry}
          style={{ width: '1.5rem' }}
        />
      </StadiumContainer>
      <DateContainer>
        <BsCalendarDate />
        <span>{date}</span>
      </DateContainer>
    </LastMatchContainer>
  )
}
