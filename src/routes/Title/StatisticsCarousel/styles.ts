import { styled } from 'styled-components'
import Carousel from 'nuka-carousel'

export const StatisticsCarouselContainer = styled.div`
  margin-top: 10rem;
`

export const CarouselContainer = styled(Carousel)``

export const SlideArrowContainer = styled.button`
  all: unset;
  cursor: pointer;
`

export const Slide = styled.li`
  width: 80%;
  margin: 1rem auto;
  list-style: none;
`

export const SliderWrapper = styled.div`
  border: 4px solid red;
  outline: 4px solid black;
  padding: 2rem 4rem;

  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${(props) => props.theme.black};

    svg {
      color: ${(props) => props.theme.red};
    }
  }

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

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      gap: 0.2rem;
      align-items: center;
    }
  }

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.red};
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
`
