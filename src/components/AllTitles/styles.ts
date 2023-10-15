import { styled } from 'styled-components'

export const AllTitlesContainer = styled.main`
  margin-top: 10rem;
  background: white;

  h1 {
    color: ${(props) => props.theme.black};
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 10rem;
  }

  ul {
    background-color: transparent;
  }
`
