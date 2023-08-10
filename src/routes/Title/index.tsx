import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleInformation } from '../../utils/firebase/firebase'
import {
  LastMatchContainer,
  SquadContainer,
  TitleContainer,
  TopScorerContainer,
} from './styles'
import ReactCountryFlag from 'react-country-flag'

interface WinningSquadPlayers {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
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
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
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
        console.log(fetchedTitleInformation)
        setTitleInformation(fetchedTitleInformation)
      }
    }

    fetchTitleInformation()
  }, [category, year])

  interface PlayerTableRowProps {
    playerNumber: string
    playerName: string
  }

  function PlayerTableRow({ playerNumber, playerName }: PlayerTableRowProps) {
    return (
      <tr>
        <td>{playerNumber}</td>
        <td>{playerName}</td>
      </tr>
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
              <table>
                <tr>
                  <th>Nº</th>
                  <th>Nome</th>
                </tr>
                {[...Array.from({ length: 11 }, (_, i) => i + 1)].map(
                  (player) => (
                    <PlayerTableRow
                      key={player}
                      playerName={
                        titleInformation.winningSquad.players[
                          player.toString() as unknown as keyof WinningSquadPlayers
                        ]
                      }
                      playerNumber={player.toString()}
                    />
                  ),
                )}
              </table>
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
