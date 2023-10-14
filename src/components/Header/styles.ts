import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'

export const UpperHeader = styled.div`
  background: transparent;
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  transition: all 0.2 ease-out;

  span {
    color: ${(props) => props.theme.red};
  }

  img {
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translate(50%, -50%);
    height: 10rem;
    -webkit-filter: drop-shadow(0 0 3px #000);
    filter: drop-shadow(0 0 3px #000);
  }
`

export const LowerHeader = styled.div``

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
`

interface CoverHeaderProps {
  coverPhoto: string
}

export const CoverHeader = styled.div<CoverHeaderProps>`
  height: 100vh;
  margin-top: -6rem;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.coverPhoto});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0 0 15px #000;

  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    margin: 10rem 0;

    padding: 0 6rem;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 3.5rem;
    letter-spacing: 3px;
    text-shadow: 4px 4px 20px #000;

    @media ${devices.tablet} {
      font-size: 3.2rem;
    }
  }
`
