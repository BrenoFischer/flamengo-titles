import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'

export const AllTitlesContainer = styled.main`
  margin-top: 5rem;

  h1 {
    padding: 0 10rem;
    color: ${(props) => props.theme.black};
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 10rem;
  }

  ul {
    background-color: ${(props) => props.theme.white};
    padding: 4rem 10rem;

    @media ${devices.phone} {
      padding: 2rem 4rem;
    }
  }
`
