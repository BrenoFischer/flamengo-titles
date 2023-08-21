import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getTitleInformation } from '../../utils/firebase/firebase'

import { LanguageContext } from '../../contexts/LanguageContext'

import TitleHeader from './TitleHeader'
import LastMatch from './LastMatch'
import Squad from './Squad'
import {
  FinalRanking,
  TitleInformation,
  titleInformationScheme,
} from './utils/titleInformationScheme'

import {
  FinalRankingContainer,
  ResumeContainer,
  TitleContainer,
  TitleSectionH2,
  TopScorerContainer,
  WinningSquadPhotoContainer,
} from './styles'
import LoadingTitleContent from './LoadingTitleContent'
import GoToTop from '../../utils/auxiliaryFunctions/goToTop'

interface TitleSectionHeaderProps {
  ptText: string
  enText: string
  activeLanguage: string
}

export function TitleSectionHeader({
  ptText,
  enText,
  activeLanguage,
}: TitleSectionHeaderProps) {
  return (
    <TitleSectionH2>
      <span>|</span> {activeLanguage === 'PT' ? ptText : enText}
    </TitleSectionH2>
  )
}

export default function Title() {
  const { activeLanguage } = useContext(LanguageContext)
  const [loadingTitle, setLoadingTitle] = useState(true)
  const [titleInformation, setTitleInformation] = useState<TitleInformation>(
    titleInformationScheme,
  )
  const { category, year } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTitleInformation() {
      setLoadingTitle(true)
      if (category && year !== undefined) {
        const fetchedTitleInformation = await getTitleInformation(
          category,
          year,
        )
        if (fetchedTitleInformation === undefined) navigate('*')
        else setTitleInformation(fetchedTitleInformation)
      }
      setLoadingTitle(false)
    }

    fetchTitleInformation()
  }, [category, year, navigate])

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
      <GoToTop />
      {loadingTitle ? (
        <LoadingTitleContent category={category!} year={year!} />
      ) : (
        <TitleContainer>
          <TitleHeader
            category={category!}
            year={year!}
            coverImg={titleInformation.coverImg}
          />

          <main>
            <ResumeContainer>
              <TitleSectionHeader
                activeLanguage={activeLanguage}
                ptText="Resumo"
                enText="Resume"
              />
              <p>
                {activeLanguage === 'PT'
                  ? titleInformation.resume.pt.replaceAll('\\n', '\n')
                  : titleInformation.resume.en.replaceAll('\\n', '\n')}
              </p>
            </ResumeContainer>

            <LastMatch
              team={titleInformation.finalMatch.team}
              teamCountry={titleInformation.finalMatch.countryCode}
              score={titleInformation.finalMatch.score}
              stadium={titleInformation.finalMatch.stadium.name}
              stadiumCountry={titleInformation.finalMatch.stadium.country}
              date={titleInformation.finalMatch.date}
              location={titleInformation.finalMatch.stadium.location}
              spectators={titleInformation.finalMatch.stadium.spectators}
            />

            <WinningSquadPhotoContainer>
              <TitleSectionHeader
                activeLanguage={activeLanguage}
                ptText="Foto dos Campeões"
                enText="Champions Photo"
              />
              <img src={titleInformation.winningSquad.photo} alt="" />
            </WinningSquadPhotoContainer>

            <Squad
              coach={titleInformation.winningSquad.coach}
              formation={titleInformation.winningSquad.formation}
              players={titleInformation.winningSquad.players}
            />

            {titleInformation.roundRobin && (
              <>
                <TitleSectionHeader
                  ptText="Tabela Final"
                  enText="Final Ranking"
                  activeLanguage={activeLanguage}
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
              <TitleSectionHeader
                ptText="Artilheiro"
                enText="Top Scorer"
                activeLanguage={activeLanguage}
              />
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
