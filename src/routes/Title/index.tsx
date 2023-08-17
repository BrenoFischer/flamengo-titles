import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import * as Checkbox from '@radix-ui/react-checkbox'
import { MdOutlineStadium } from 'react-icons/md'
import { getTitleInformation } from '../../utils/firebase/firebase'
import {
  CheckboxComponent,
  CheckboxIcon,
  CheckboxWrapper,
  FinalRankingContainer,
  FootballFieldWrapper,
  FormationWrapper,
  LastMatchContainer,
  PlayerOnField,
  SquadContainer,
  SquadInformationContainer,
  StadiumContainer,
  TitleContainer,
  TitleSectionH2,
  TopScorerContainer,
  WinningSquadPhotoContainer,
} from './styles'
import ReactCountryFlag from 'react-country-flag'
import FootballField from '../../assets/football-field.png'
import { LanguageContext } from '../../contexts/LanguageContext'

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

interface TeamFromFinalRanking {
  name: string
  points: string
  gc: number
  gm: number
}

interface FinalRanking {
  1: TeamFromFinalRanking
  2: TeamFromFinalRanking
  3: TeamFromFinalRanking
  4: TeamFromFinalRanking
  5: TeamFromFinalRanking
  6: TeamFromFinalRanking
  7: TeamFromFinalRanking
  8: TeamFromFinalRanking
  9: TeamFromFinalRanking
  10: TeamFromFinalRanking
  11: TeamFromFinalRanking
  12: TeamFromFinalRanking
  13: TeamFromFinalRanking
  14: TeamFromFinalRanking
  15: TeamFromFinalRanking
  16: TeamFromFinalRanking
  17: TeamFromFinalRanking
  18: TeamFromFinalRanking
  19: TeamFromFinalRanking
  20: TeamFromFinalRanking
}

interface Stadium {
  name: string
  country: string
  location: string
  spectators: string
}

interface TitleInformation {
  coverImg: string
  roundRobin: boolean
  finalMatch: {
    score: string
    team: string
    countryCode: string
    stadium: Stadium
  }
  finalRanking: FinalRanking
  topScorer: {
    player: string
    team: string
    goals: string
  }
  winningSquad: {
    formation: string
    photo: string
    coach: { name: string; country: string }
    players: WinningSquadPlayers
  }
}

export default function Title() {
  const { activeLanguage } = useContext(LanguageContext)
  const [showPlayers, setShowPlayers] = useState(false)
  const [titleInformation, setTitleInformation] = useState<TitleInformation>({
    coverImg: '',
    finalMatch: {
      score: '',
      team: '',
      countryCode: '',
      stadium: { name: '', country: '', location: '', spectators: '' },
    },
    finalRanking: {
      1: { name: '', points: '', gc: 0, gm: 0 },
      2: { name: '', points: '', gc: 0, gm: 0 },
      3: { name: '', points: '', gc: 0, gm: 0 },
      4: { name: '', points: '', gc: 0, gm: 0 },
      5: { name: '', points: '', gc: 0, gm: 0 },
      6: { name: '', points: '', gc: 0, gm: 0 },
      7: { name: '', points: '', gc: 0, gm: 0 },
      8: { name: '', points: '', gc: 0, gm: 0 },
      9: { name: '', points: '', gc: 0, gm: 0 },
      10: { name: '', points: '', gc: 0, gm: 0 },
      11: { name: '', points: '', gc: 0, gm: 0 },
      12: { name: '', points: '', gc: 0, gm: 0 },
      13: { name: '', points: '', gc: 0, gm: 0 },
      14: { name: '', points: '', gc: 0, gm: 0 },
      15: { name: '', points: '', gc: 0, gm: 0 },
      16: { name: '', points: '', gc: 0, gm: 0 },
      17: { name: '', points: '', gc: 0, gm: 0 },
      18: { name: '', points: '', gc: 0, gm: 0 },
      19: { name: '', points: '', gc: 0, gm: 0 },
      20: { name: '', points: '', gc: 0, gm: 0 },
    },
    roundRobin: false,
    topScorer: {
      player: '',
      team: '',
      goals: '',
    },
    winningSquad: {
      formation: '',
      photo: '',
      coach: { name: '', country: '' },
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

  interface TitleSectionHeaderProps {
    ptText: string
    enText: string
  }

  function TitleSectionHeader({ ptText, enText }: TitleSectionHeaderProps) {
    return (
      <TitleSectionH2>
        <span>|</span> {activeLanguage === 'PT' ? ptText : enText}
      </TitleSectionH2>
    )
  }

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
            titleInformation.winningSquad.players[
              player.toString() as unknown as keyof WinningSquadPlayers
            ]

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

  function FinalRankingTable() {
    return (
      <>
        {[...Array.from({ length: 20 }, (_, i) => i + 1)].map((team) => {
          const teamInfo =
            titleInformation.finalRanking[
              team.toString() as unknown as keyof FinalRanking
            ]

          const sg = teamInfo.gm - teamInfo.gc
          return (
            <tr key={teamInfo.name}>
              <td>{team}</td>
              <td>{teamInfo.name}</td>
              <td>{teamInfo.points}</td>
              <td>{teamInfo.gm.toString()}</td>
              <td>{teamInfo.gc.toString()}</td>
              <td>{sg.toString()}</td>
            </tr>
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
              <TitleSectionHeader ptText="Final" enText="Last Match" />
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
              <StadiumContainer>
                {<MdOutlineStadium />}
                <span>
                  {titleInformation.finalMatch.stadium.spectators}
                </span>{' '}
                {activeLanguage === 'PT' ? 'Espectadores' : 'Spectators'} -{' '}
                <span>{titleInformation.finalMatch.stadium.name}</span> -{' '}
                {titleInformation.finalMatch.stadium.location}
                <ReactCountryFlag
                  svg
                  countryCode={titleInformation.finalMatch.stadium.country}
                  style={{ width: '1.5rem' }}
                />
              </StadiumContainer>
            </LastMatchContainer>

            <WinningSquadPhotoContainer>
              <TitleSectionHeader
                ptText="Foto dos Campeões"
                enText="Champions Photo"
              />
              <img src={titleInformation.winningSquad.photo} alt="" />
            </WinningSquadPhotoContainer>

            <SquadContainer>
              <TitleSectionHeader
                ptText="Elenco Campeão"
                enText="Champion Squad"
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
                    <tr>
                      <td>{activeLanguage === 'PT' ? 'Técnico' : 'Coach'}</td>
                      <td>
                        <ReactCountryFlag
                          svg
                          countryCode={
                            titleInformation.winningSquad.coach.country
                          }
                          style={{ width: '2rem' }}
                        />
                      </td>
                      <td>{titleInformation.winningSquad.coach.name}</td>
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
                  <img
                    src={FootballField}
                    alt="Football Field with winning squad"
                  />
                  <WinningPlayers />
                  <FormationWrapper>
                    <span>
                      {activeLanguage === 'PT'
                        ? 'Formação Principal'
                        : 'Main Starting Line-up'}
                      :
                    </span>
                    {titleInformation.winningSquad.formation}
                  </FormationWrapper>
                </FootballFieldWrapper>
              </SquadInformationContainer>
            </SquadContainer>

            {titleInformation.roundRobin && (
              <>
                <TitleSectionHeader
                  ptText="Tabela Final"
                  enText="Final Ranking"
                />
                <FinalRankingContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Pos</th>
                        <th>{activeLanguage === 'PT' ? 'Time' : 'Team'}</th>
                        <th>{activeLanguage === 'PT' ? 'Pontos' : 'Points'}</th>
                        <th>{activeLanguage === 'PT' ? 'GP' : 'Goals'}</th>
                        <th>{activeLanguage === 'PT' ? 'GC' : 'GC'}</th>
                        <th>{activeLanguage === 'PT' ? 'SG' : 'GD'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <FinalRankingTable />
                    </tbody>
                  </table>
                </FinalRankingContainer>
              </>
            )}

            <TopScorerContainer>
              <TitleSectionHeader ptText="Artilheiro" enText="Top Scorer" />
              <h3>
                {titleInformation.topScorer.player} -{' '}
                {titleInformation.topScorer.team}:{' '}
                <span>{titleInformation.topScorer.goals}</span>
                {activeLanguage === 'PT' ? 'gols' : 'goals'}
              </h3>
            </TopScorerContainer>
          </main>
        </TitleContainer>
      )}
    </>
  )
}
