import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  /* padding: 2rem 0; */
`

export const UpperHeader = styled.div`
  background: ${(props) => props.theme.red};
  height: 6rem;
  padding: 1rem 0;

  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px #000;

  img {
    height: 10rem;
    /* box-shadow: 0 0 15px #000; */
    -webkit-filter: drop-shadow(0 0 3px #000);
    filter: drop-shadow(0 0 3px #000);
  }
`
