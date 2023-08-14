import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleInformation } from '../../utils/firebase/firebase'
import {
  FootballFieldWrapper,
  LastMatchContainer,
  PlayerOnField,
  SquadContainer,
  SquadInformationContainer,
  TitleContainer,
  TopScorerContainer,
} from './styles'
import ReactCountryFlag from 'react-country-flag'
import FootballField from '../../assets/football-field.png'

interface PlayerType {
  name: string
  number: string
  nationality: string
}

interface WinningSquadPlayers {
  1: PlayerType
  2: PlayerType
  3: PlayerType
  4: PlayerType
  5: PlayerType
  6: PlayerType
  7: PlayerType
  8: PlayerType
  9: PlayerType
  10: PlayerType
  11: PlayerType
}

interface TitleInformation {
  coverImg: string
  finalMatch: {
    score: string
    team: string
    countryCode: string
  }
  topScorer: {
    player: string
    team: string
    goals: string
  }
  winningSquad: {
    formation: string
    coach: string
    players: WinningSquadPlayers
  }
}

export default function Title() {
  const [titleInformation, setTitleInformation] = useState<TitleInformation>({
    coverImg: '',
    finalMatch: {
      score: '',
      team: '',
      countryCode: '',
    },
    topScorer: {
      player: '',
      team: '',
      goals: '',
    },
    winningSquad: {
      formation: '',
      coach: '',
      players: {
        1: { name: '', nationality: '', number: '' },
        2: { name: '', nationality: '', number: '' },
        3: { name: '', nationality: '', number: '' },
        4: { name: '', nationality: '', number: '' },
        5: { name: '', nationality: '', number: '' },
        6: { name: '', nationality: '', number: '' },
        7: { name: '', nationality: '', number: '' },
        8: { name: '', nationality: '', number: '' },
        9: { name: '', nationality: '', number: '' },
        10: { name: '', nationality: '', number: '' },
        11: { name: '', nationality: '', number: '' },
      },
    },
  })
  const { category, year } = useParams()

  useEffect(() => {
    async function fetchTitleInformation() {
      if (category && year !== undefined) {
        const fetchedTitleInformation = await getTitleInformation(
          category,
          year,
        )
        setTitleInformation(fetchedTitleInformation)
      }
    }

    fetchTitleInformation()
  }, [category, year])

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
    const formation = titleInformation.winningSquad.formation

    let playersPositionOnField: string[][]
    const defaultFormation = [
      ['50%', '94%'],
      ['15%', '70%'],
      ['30%', '80%'],
      ['70%', '80%'],
      ['85%', '70%'],
      ['20%', '30%'],
      ['40%', '50%'],
      ['60%', '50%'],
      ['80%', '30%'],
      ['40%', '10%'],
      ['60%', '10%'],
    ]

    if (formation === '4-4-2') {
      playersPositionOnField = defaultFormation
    } else if (formation === '4-3-3') {
      playersPositionOnField = [
        ['50%', '94%'],
        ['85%', '70%'],
        ['70%', '80%'],
        ['30%', '80%'],
        ['15%', '70%'],
        ['33%', '55%'],
        ['75%', '50%'],
        ['50%', '38%'],
        ['75%', '20%'],
        ['25%', '20%'],
        ['50%', '10%'],
      ]
    } else {
      playersPositionOnField = defaultFormation
    }

    return (
      <>
        {[...Array.from({ length: 11 }, (_, i) => i + 1)].map((player) => {
          const playerInfo =
            titleInformation.winningSquad.players[
              player.toString() as unknown as keyof WinningSquadPlayers
            ]

          return (
            <PlayerOnField
              key={player}
              left={playersPositionOnField[player - 1][0]}
              top={playersPositionOnField[player - 1][1]}
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
    <>
      {titleInformation.coverImg === '' ? (
        <></>
      ) : (
        <TitleContainer>
          <header>
            <h1>
              {category} - {year}
            </h1>
            <img src={titleInformation.coverImg} alt="" />
          </header>

          <main>
            <LastMatchContainer>
              <h2>
                <span>|</span> Final
              </h2>
              <div>
                <ReactCountryFlag
                  svg
                  countryCode="BR"
                  style={{ width: '2rem' }}
                />
                <h3>
                  Flamengo
                  <span>{titleInformation.finalMatch.score}</span>{' '}
                  {titleInformation.finalMatch.team}
                </h3>
                <ReactCountryFlag
                  svg
                  countryCode={titleInformation.finalMatch.countryCode}
                  style={{ width: '2rem' }}
                />
              </div>
            </LastMatchContainer>

            <SquadContainer>
              <h2>
                <span>|</span> Elenco Campeão
              </h2>
              <SquadInformationContainer>
                <table>
                  <tr>
                    <th>Nº</th>
                    <th>País</th>
                    <th>Nome</th>
                  </tr>
                  {[...Array.from({ length: 11 }, (_, i) => i + 1)].map(
                    (player) => {
                      const playerInfo =
                        titleInformation.winningSquad.players[
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
                    },
                  )}
                </table>

                <FootballFieldWrapper>
                  <img
                    src={FootballField}
                    alt="Football Field with winning squad"
                  />
                  <WinningPlayers />
                </FootballFieldWrapper>
              </SquadInformationContainer>
            </SquadContainer>

            <TopScorerContainer>
              <h2>
                <span>|</span> Artilheiro
              </h2>
              <h3>
                {titleInformation.topScorer.player} -{' '}
                {titleInformation.topScorer.team}:{' '}
                <span>{titleInformation.topScorer.goals}</span>
              </h3>
            </TopScorerContainer>
          </main>
        </TitleContainer>
      )}
    </>
  )
}
