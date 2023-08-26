import React, { Key, useContext } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { BiFootball } from 'react-icons/bi'
import { BsTable, BsShield } from 'react-icons/bs'
import { ImStatsBars } from 'react-icons/im'
import {
  CarouselContainer,
  ChartContainer,
  ChartLabelContainer,
  Slide,
  SlideArrowContainer,
  SlideNumberWrapper,
  SlideWrapper,
  StatisticsCarouselContainer,
  StatisticsWrapper,
} from './styles'
import { TitleSectionHeader } from '..'
import { LanguageContext } from '../../../contexts/LanguageContext'
import { TitleInformation } from '../utils/titleInformationScheme'
import { PieChart } from 'react-minimal-pie-chart'

interface SlideArrowProps {
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>
  arrowIcon: React.ReactNode
}

function SlideArrow({ handleOnClick, arrowIcon }: SlideArrowProps) {
  return (
    <SlideArrowContainer onClick={handleOnClick}>
      {arrowIcon}
    </SlideArrowContainer>
  )
}

interface StatisticsCarouselProps {
  titleInformation: TitleInformation
}

export default function StatisticsCarousel({
  titleInformation,
}: StatisticsCarouselProps) {
  const { activeLanguage } = useContext(LanguageContext)

  interface SlideSchemeProps {
    children: React.ReactNode
    slideNumber: Key
  }

  function SlideScheme({ children, slideNumber }: SlideSchemeProps) {
    return (
      <Slide>
        <SlideNumberWrapper>{slideNumber}</SlideNumberWrapper>
        <SlideWrapper>{children}</SlideWrapper>
      </Slide>
    )
  }

  function TopScorerSlide() {
    return (
      <>
        <h2>
          <BiFootball />
          {activeLanguage === 'PT'
            ? 'Artilheiro do Campeonato'
            : 'Championship Top Scorer'}
        </h2>
        <StatisticsWrapper>
          <div>
            <p>{activeLanguage === 'PT' ? 'Artilheiro' : 'Top Scorer'}</p>
            <span>{titleInformation.statistics.topScorer.player}</span>
          </div>
          <div>
            <p>{activeLanguage === 'PT' ? 'Time' : 'Team'}</p>
            <span>{titleInformation.statistics.topScorer.team}</span>
          </div>
          <div>
            <p>{activeLanguage === 'PT' ? 'Gols' : 'Goals'}</p>
            <span>{titleInformation.statistics.topScorer.goals}</span>
          </div>
        </StatisticsWrapper>
      </>
    )
  }

  function GeneralStatisticsSlide() {
    const chartWinsTitle = activeLanguage ? 'Vitórias' : 'Wins'
    const chartDrawsTitle = activeLanguage ? 'Empates' : 'Draws'
    const chartDefeatsTitle = activeLanguage ? 'Derrotas' : 'Defeats'
    const wins = Number(titleInformation.statistics.flamengo.wins)
    const draws = Number(titleInformation.statistics.flamengo.draws)
    const defeats = Number(titleInformation.statistics.flamengo.defeats)

    return (
      <>
        <h2>
          <ImStatsBars />
          {activeLanguage === 'PT'
            ? 'Desempenho do Flamengo'
            : "Flamengo's Performance"}
        </h2>
        <ChartContainer>
          <PieChart
            radius={40}
            lineWidth={50}
            paddingAngle={5}
            data={[
              { title: chartWinsTitle, value: wins, color: '#db2017' },
              { title: chartDrawsTitle, value: draws, color: '#808080' },
              { title: chartDefeatsTitle, value: defeats, color: '#191310' },
            ]}
          />
          <div>
            <ChartLabelContainer color="#db2017">
              <span>{titleInformation.statistics.flamengo.wins} </span>
              <p>{activeLanguage === 'PT' ? 'Vitórias' : 'Wins'}</p>
            </ChartLabelContainer>
            <ChartLabelContainer color="#808080">
              <span>{titleInformation.statistics.flamengo.draws} </span>
              <p>{activeLanguage === 'PT' ? 'Empates' : 'Draws'}</p>
            </ChartLabelContainer>
            <ChartLabelContainer color="#191310">
              <span>{titleInformation.statistics.flamengo.defeats} </span>
              <p>{activeLanguage === 'PT' ? 'Derrotas' : 'Defeats'}</p>
            </ChartLabelContainer>
          </div>
        </ChartContainer>
      </>
    )
  }

  function ChampionshipStatisticsSlide() {
    const startingChampionshipDate = new Date(
      titleInformation.statistics.period.from.toDate(),
    )

    const finishingChampionshipDate = new Date(
      titleInformation.statistics.period.to.toDate(),
    )

    const startingYear = startingChampionshipDate.getFullYear()
    let startingMonth: number | string = startingChampionshipDate.getMonth()
    let startingDay: number | string = startingChampionshipDate.getDate()

    if (startingDay < 10) startingDay = '0' + startingDay.toString()
    if (startingMonth < 10) startingMonth = '0' + startingMonth.toString()

    const startingChampionshipDateString =
      activeLanguage === 'PT'
        ? startingDay + '/' + startingMonth + '/' + startingYear
        : startingMonth + '/' + startingDay + '/' + startingYear

    const finishingYear = finishingChampionshipDate.getFullYear()
    let finishingMonth: number | string = finishingChampionshipDate.getMonth()
    let finishingDay: number | string = finishingChampionshipDate.getDate()

    if (finishingDay < 10) finishingDay = '0' + finishingDay.toString()
    if (finishingMonth < 10) finishingMonth = '0' + finishingMonth.toString()

    const finishingChampionshipDateString =
      activeLanguage === 'PT'
        ? finishingDay + '/' + finishingMonth + '/' + finishingYear
        : finishingMonth + '/' + finishingDay + '/' + finishingYear

    return (
      <>
        <h2>
          <BsTable />
          {activeLanguage === 'PT'
            ? 'Estatísticas do Campeonato'
            : 'Championship Statistics'}
        </h2>
        <StatisticsWrapper>
          <div>
            <p>{activeLanguage === 'PT' ? 'Times' : 'Teams'}</p>
            <span>{titleInformation.statistics.teamsQuantity}</span>
          </div>
          <div>
            <p>
              {activeLanguage === 'PT'
                ? 'Período do Torneio'
                : 'Championship Period'}
            </p>
            <div>
              <span>{startingChampionshipDateString}</span>
              <p>-</p>
              <span>{finishingChampionshipDateString}</span>
            </div>
          </div>
          <div>
            <p>{activeLanguage === 'PT' ? 'Média de gols' : 'Avarage goals'}</p>
            <span>{titleInformation.statistics.avarageGoals}</span>
          </div>
        </StatisticsWrapper>
      </>
    )
  }

  function FlamengoStatistcsSlide() {
    const matchesPlayed = Number(
      titleInformation.statistics.flamengo.matchesPlayed,
    )
    const goalsScored = Number(titleInformation.statistics.flamengo.goalsScored)
    const goalsAgainst = Number(
      titleInformation.statistics.flamengo.goalsAgainst,
    )

    const flamengoAvarageGoals = (goalsScored / matchesPlayed).toFixed(2)
    const flamengoAvarageGoalsAgainst = (goalsAgainst / matchesPlayed).toFixed(
      2,
    )

    return (
      <>
        <h2>
          <BsShield />
          {activeLanguage === 'PT'
            ? 'Estatísticas do Flamengo'
            : 'Flamengo Statistics'}
        </h2>
        <StatisticsWrapper>
          <div>
            <p>{activeLanguage === 'PT' ? 'Gols Marcados' : 'Goals Scored'}</p>
            <span>{goalsScored}</span>
          </div>
          <div>
            <p>{activeLanguage === 'PT' ? 'Gols Sofridos' : 'Goals Against'}</p>
            <span>{goalsAgainst}</span>
          </div>
          <div>
            <p>
              {activeLanguage === 'PT' ? 'Total de Partidas' : 'Matches Played'}
            </p>
            <span>{matchesPlayed}</span>
          </div>
        </StatisticsWrapper>
        <StatisticsWrapper>
          <div>
            <p>{activeLanguage === 'PT' ? 'Média de gols' : 'Avarage Goals'}</p>
            <span>{flamengoAvarageGoals}</span>
          </div>
          <div>
            <p>
              {activeLanguage === 'PT'
                ? 'Média de gols sofridos'
                : 'Avarage Goals Against'}
            </p>
            <span>{flamengoAvarageGoalsAgainst}</span>
          </div>
        </StatisticsWrapper>
      </>
    )
  }

  const slides = [
    <FlamengoStatistcsSlide key={1} />,
    <TopScorerSlide key={2} />,
    <GeneralStatisticsSlide key={3} />,
    <ChampionshipStatisticsSlide key={4} />,
  ]

  return (
    <StatisticsCarouselContainer>
      <TitleSectionHeader
        ptText="Estatísticas"
        enText="Statistics"
        activeLanguage={activeLanguage}
      />
      <CarouselContainer
        wrapAround={true}
        slidesToShow={1}
        renderBottomCenterControls={() => null}
        dragging={false}
        // adaptiveHeight
        renderCenterLeftControls={({ previousSlide }) => (
          <SlideArrow
            handleOnClick={previousSlide}
            arrowIcon={<HiArrowLeft size={40} />}
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SlideArrow
            handleOnClick={nextSlide}
            arrowIcon={<HiArrowRight size={40} />}
          />
        )}
      >
        {slides.map((slide) => (
          <SlideScheme key={slide.key} slideNumber={slide.key!}>
            {slide}
          </SlideScheme>
        ))}
      </CarouselContainer>
    </StatisticsCarouselContainer>
  )
}
