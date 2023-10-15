import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { devices } from '../../../styles/mixins'

export const ChronologicalCarouselContainer = styled.div`
  margin: 10rem 7rem 0 7rem;

  @media ${devices.laptop} {
    margin: 10rem 3rem 0 3rem;
  }
`

export const SlideContainer = styled.div`
  padding-bottom: 4rem;
`

interface SlideArrowContainerProps {
  $rightArrow: boolean
}

export const SlideArrowContainer = styled.button<SlideArrowContainerProps>`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.theme.red};
  margin-left: ${(props) => (props.$rightArrow ? 0 : '-4rem')};
  margin-right: ${(props) => (props.$rightArrow ? '-4rem' : 0)};

  @media ${devices.laptop} {
    margin-left: ${(props) => (props.$rightArrow ? 0 : '-2rem')};
    margin-right: ${(props) => (props.$rightArrow ? '-2rem' : 0)};
  }
`

export const SlideWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  position: relative;

  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.black};

  transition: all 0.2s ease-out;

  p {
    font-weight: 600;
    font-size: 3rem;
  }

  span {
    font-size: 2rem;
    color: ${(props) => props.theme.red};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    filter: brightness(120%);
    transform: scale(120%);
  }
`

interface CategoryColorIndicatorProps {
  color: string
}

export const CategoryColorIndicator = styled.div<CategoryColorIndicatorProps>`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

export const SliderWrapperNotClickable = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  transition: all 0.2s ease-out;
  text-decoration: none;
  color: ${(props) => props.theme.black};

  p {
    font-weight: 600;
    font-size: 3rem;
  }

  span {
    font-size: 2rem;
    color: ${(props) => props.theme.black};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    filter: brightness(120%);
    transform: scale(120%);
  }
`

export const IconsContainer = styled.div`
  color: yellow;
  font-size: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
`

export const SuperStarWrapper = styled.div`
  color: ${(props) => props.theme.red};
`

export const LinkIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  color: ${(props) => props.theme.black};
  font-size: 1.4rem;
`

export const ChronologicalLine = styled.div`
  position: relative;
  display: flex;
`

interface LeftLineProps {
  $firstSlide: boolean
}

export const LeftLine = styled.div<LeftLineProps>`
  width: 50%;
  height: 5px;
  background-color: ${(props) =>
    props.$firstSlide ? 'transparent' : props.theme.black};
`

interface RightLineProps {
  $lastSlide: boolean
}

export const RightLine = styled.div<RightLineProps>`
  width: 50%;
  height: 5px;
  background-color: ${(props) =>
    props.$lastSlide ? 'transparent' : props.theme.black};
`

export const ChronologicalDot = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.black};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10px;
  width: 10px;
  border-radius: 50%;
  z-index: 100;
`

export const DecadeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;
`
