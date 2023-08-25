import React, { useContext } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { BiFootball } from 'react-icons/bi'
import { ImStatsBars } from 'react-icons/im'
import {
  CarouselContainer,
  ChartContainer,
  ChartLabelContainer,
  GeneralStatisticsContainer,
  Slide,
  SlideArrowContainer,
  StatisticsCarouselContainer,
  TopScorerContainer,
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

  function TopScorerSlide() {
    return (
      <TopScorerContainer>
        <h2>
          <BiFootball />
          {activeLanguage === 'PT'
            ? 'Artilheiro do Campeonato'
            : 'Championship Top Scorer'}
        </h2>
        <h3>
          {titleInformation.statistics.topScorer.player} -{' '}
          {titleInformation.statistics.topScorer.team}:{' '}
          <span>{titleInformation.statistics.topScorer.goals}</span>
          {activeLanguage === 'PT' ? 'gols' : 'goals'}
        </h3>
      </TopScorerContainer>
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
      <GeneralStatisticsContainer>
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
      </GeneralStatisticsContainer>
    )
  }

  const slides = [
    <GeneralStatisticsSlide key={1} />,
    <TopScorerSlide key={2} />,
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
        dragging={false}
        cellAlign="center"
        adaptiveHeight
        renderCenterLeftControls={({ previousSlide }) => (
          <SlideArrow
            handleOnClick={previousSlide}
            arrowIcon={<HiArrowLeft size={30} />}
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SlideArrow
            handleOnClick={nextSlide}
            arrowIcon={<HiArrowRight size={30} />}
          />
        )}
      >
        {slides.map((slide) => (
          <Slide key={slide.key}>{slide}</Slide>
        ))}
      </CarouselContainer>
    </StatisticsCarouselContainer>
  )
}
