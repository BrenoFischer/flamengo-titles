import { styled } from 'styled-components'

export const UpperHeader = styled.div`
  background: ${(props) => props.theme.red};
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px #000;

  position: relative;

  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};

  span {
    color: ${(props) => props.theme.white};
  }

  img {
    position: relative;
    top: 50%;
    right: 0;
    height: 10rem;
    -webkit-filter: drop-shadow(0 0 3px #000);
    filter: drop-shadow(0 0 3px #000);
  }
`
