import { styled } from 'styled-components'

export const UpperHeader = styled.div`
  background: ${(props) => props.theme.red};
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px #000;

  position: relative;

  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};
  text-transform: uppercase;

  transition: all 0.2 ease-out;

  span {
    color: ${(props) => props.theme.white};
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

export const LowerHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  svg: {
    cursor: pointer;
    border: 1px solid black;
  }
`
