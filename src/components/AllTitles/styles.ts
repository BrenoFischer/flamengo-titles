import { styled } from 'styled-components'

export const AllTitlesContainer = styled.main`
  margin-top: 20rem;

  h1 {
    padding: 0 10rem;
    color: ${(props) => props.theme.black};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 10rem;
  }

  ul {
    background-color: #f5f5f5;
    padding: 4rem 10rem;
  }
`
