import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'
import { motion } from 'framer-motion'

const PADDING_LEFT = '8rem'
const PADDING_LEFT_PHONE = '2rem'

export const CategoryImageContainer = styled.div`
  position: absolute;
  right: 4%;
  transform: translateY(-90%);

  @media ${devices.phone} {
    position: relative;
    transform: translateY(2rem);
    display: flex;
    justify-content: center;
  }
`

export const PlayerImg = styled(motion.img)`
  transform-origin: bottom;
  transition: all 0.2s ease-out;
  z-index: 999;
  max-height: 20rem;
  filter: drop-shadow(rgba(18, 30, 39, 0.6) 6px 6px);
`

export const TitleCategoryContainer = styled(motion.li)`
  margin-bottom: 10rem;
  list-style: none;
  position: relative;

  background-color: ${(props) => props.theme.black};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    transition: transform 0.2s ease-in;

    &:last-child {
      margin-bottom: 1rem;
    }

    &:hover {
      transform: scale(1.3);
    }
  }

  h2 {
    color: ${(props) => props.theme.red};
    font-weight: 900;
    font-size: 3.5rem;
    letter-spacing: 2px;

    padding-left: ${PADDING_LEFT};
    padding-top: 2rem;

    span {
      line-height: inherit;
      color: ${(props) => props.theme.white};
      font-size: 2.5rem;
    }

    @media ${devices.phone} {
      padding-left: ${PADDING_LEFT_PHONE};
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`

export const TitlesYearsContainer = styled.ul`
  padding-left: ${PADDING_LEFT};
  margin-bottom: 2rem;
  max-height: 20rem;
  max-width: 50rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  list-style: none;

  @media ${devices.phone} {
    padding-left: ${PADDING_LEFT_PHONE};
    padding-right: ${PADDING_LEFT_PHONE};
    max-width: 100%;
    max-height: 100%;
  }

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const EnabledLink = styled.p`
  cursor: pointer;

  transition: all 0.2s ease-out;
`

export const DisabledLink = styled.p`
  color: ${(props) => props.theme.darkGray};
  cursor: not-allowed;
`
