import { styled } from 'styled-components'

export const UpperHeader = styled.div`
  /* background: rgba(0, 0, 0, 1); */
  background: transparent;
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};
  text-transform: uppercase;

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

export const FirstPhraseWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
`

export const SecondPhraseWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin-left: 5rem;
`

export const LowerHeader = styled.div``

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`

interface CoverHeaderProps {
  coverPhoto: string
}

export const CoverHeader = styled.div<CoverHeaderProps>`
  height: 100vh;
  margin-top: -6rem;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.2)
    ),
    url(${(props) => props.coverPhoto});
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow: 0 0 15px #000;

  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 10rem;
    padding: 0 6rem;
    color: ${(props) => props.theme.white};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    letter-spacing: 3px;
    margin-bottom: 10rem;
  }
`
