import { useContext, useState } from 'react'

import ReactCountryFlag from 'react-country-flag'
import * as Checkbox from '@radix-ui/react-checkbox'

import FootballField from '../../../assets/football-field.png'
import { TitleSectionHeader } from '..'
import { LanguageContext } from '../../../contexts/LanguageContext'
import {
  CheckboxComponent,
  CheckboxIcon,
  CheckboxWrapper,
  FootballFieldWrapper,
  FormationWrapper,
  PlayerOnField,
  SquadContainer,
  SquadInformationContainer,
} from './styles'
import { WinningSquadPlayers } from '../utils/titleInformationScheme'

interface Coach {
  name: string
  country: string
}

interface SquadProps {
  players: WinningSquadPlayers
  coach: Coach
  formation: string
}

export default function Squad({ players, coach, formation }: SquadProps) {
  const { activeLanguage } = useContext(LanguageContext)
  const [showPlayers, setShowPlayers] = useState(false)

  interface PlayerTableRowProps {
    playerNumber: string
    playerName: string
    playerNationality: string
  }

  function PlayerTableRow({
    playerNumber,
    playerName,
    playerNationality,
  }: PlayerTableRowProps) {
    return (
      <tr>
        <td>{playerNumber}</td>
        <td>
          <ReactCountryFlag
            svg
            countryCode={playerNationality}
            style={{ width: '2rem' }}
          />
        </td>
        <td>{playerName}</td>
      </tr>
    )
  }

  function WinningPlayers() {
    let playersPositionOnField: string[][]

    const defaultFormation = [
      ['50%', '98%'],
      ['85%', '75%'],
      ['30%', '85%'],
      ['70%', '85%'],
      ['15%', '75%'],
      ['50%', '65%'],
      ['70%', '45%'],
      ['30%', '45%'],
      ['50%', '35%'],
      ['40%', '20%'],
      ['60%', '20%'],
    ]

    if (formation === '4-4-2') {
      playersPositionOnField = defaultFormation
    } else if (formation === '4-3-3') {
      playersPositionOnField = [
        ['50%', '98%'],
        ['85%', '75%'],
        ['70%', '85%'],
        ['30%', '85%'],
        ['15%', '75%'],
        ['33%', '60%'],
        ['75%', '55%'],
        ['50%', '43%'],
        ['75%', '25%'],
        ['25%', '25%'],
        ['50%', '15%'],
      ]
    } else if (formation === '4-2-3-1') {
      playersPositionOnField = [
        ['50%', '98%'],
        ['85%', '75%'],
        ['70%', '85%'],
        ['30%', '85%'],
        ['15%', '75%'],
        ['50%', '70%'],
        ['80%', '50%'],
        ['30%', '55%'],
        ['25%', '30%'],
        ['50%', '40%'],
        ['50%', '20%'],
      ]
    } else {
      playersPositionOnField = defaultFormation
    }

    return (
      <>
        {[...Array.from({ length: 11 }, (_, i) => i + 1)].map((player) => {
          const playerInfo =
            players[player.toString() as unknown as keyof WinningSquadPlayers]

          return (
            <PlayerOnField
              key={player}
              left={playersPositionOnField[player - 1][0]}
              top={playersPositionOnField[player - 1][1]}
              showPlayersNames={showPlayers}
            >
              {playerInfo.number}
              <div>{playerInfo.name}</div>
            </PlayerOnField>
          )
        })}
      </>
    )
  }

  return (
    <SquadContainer>
      <TitleSectionHeader
        ptText="Elenco Campeão"
        enText="Champion Squad"
        activeLanguage={activeLanguage}
      />
      <SquadInformationContainer>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>{activeLanguage === 'PT' ? 'País' : 'Country'}</th>
              <th>{activeLanguage === 'PT' ? 'Nome' : 'Name'}</th>
            </tr>
          </thead>
          <tbody>
            {[...Array.from({ length: 11 }, (_, i) => i + 1)].map((player) => {
              const playerInfo =
                players[
                  player.toString() as unknown as keyof WinningSquadPlayers
                ]
              return (
                <PlayerTableRow
                  key={player}
                  playerName={playerInfo.name}
                  playerNationality={playerInfo.nationality}
                  playerNumber={playerInfo.number}
                />
              )
            })}
            <tr>
              <td>{activeLanguage === 'PT' ? 'Técnico' : 'Coach'}</td>
              <td>
                <ReactCountryFlag
                  svg
                  countryCode={coach.country}
                  style={{ width: '2rem' }}
                />
              </td>
              <td>{coach.name}</td>
            </tr>
          </tbody>
        </table>

        <FootballFieldWrapper>
          <CheckboxWrapper>
            <CheckboxComponent
              id="show-players"
              checked={showPlayers}
              onCheckedChange={() => setShowPlayers(!showPlayers)}
            >
              <Checkbox.Indicator>
                {showPlayers === true && <CheckboxIcon />}
              </Checkbox.Indicator>
            </CheckboxComponent>
            <label htmlFor="show-players">
              {activeLanguage === 'PT'
                ? 'Mostrar nome dos jogadores'
                : 'Display players name'}
            </label>
          </CheckboxWrapper>
          <img src={FootballField} alt="Football Field with winning squad" />
          <WinningPlayers />
          <FormationWrapper>
            <span>
              {activeLanguage === 'PT'
                ? 'Formação Principal'
                : 'Main Starting Line-up'}
              :
            </span>
            {formation}
          </FormationWrapper>
        </FootballFieldWrapper>
      </SquadInformationContainer>
    </SquadContainer>
  )
}
