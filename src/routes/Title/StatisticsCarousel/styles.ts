import { styled } from 'styled-components'
import Carousel from 'nuka-carousel'

export const StatisticsCarouselContainer = styled.div`
  margin-top: 10rem;
`

export const CarouselContainer = styled(Carousel)`
  /* padding: 2rem; */
`

export const SlideArrowContainer = styled.button`
  all: unset;
  cursor: pointer;
`

export const Slide = styled.li`
  /* padding: 2rem; */
  display: flex;
  justify-content: center;
  margin: 10rem 0;
`

const SliderWrapper = styled.div`
  border: 4px solid red;
  outline: 4px solid black;
  padding: 3rem 6rem;

  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.black};

    svg {
      color: ${(props) => props.theme.red};
    }
  }
`

export const TopScorerContainer = styled(SliderWrapper)`
  h3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 1px;

    span {
      font-size: 2.5rem;
      margin: 0 0.4rem 0 1rem;
      color: ${(props) => props.theme.red};
    }
  }
`

export const GeneralStatisticsContainer = styled(SliderWrapper)`
  h3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 1px;

    span {
      font-size: 2.5rem;
      margin: 0 0.4rem 0 1rem;
      color: ${(props) => props.theme.red};
    }
  }
`

export const ChartContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
`

interface ChartLabelContainerProps {
  color: string
}

export const ChartLabelContainer = styled.div<ChartLabelContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;

  span {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.color};
  }
`
