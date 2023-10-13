import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'

export const AllTitlesContainer = styled.main`
  margin-top: 5rem;
  background: transparent;

  h1 {
    padding: 0 10rem;
    color: ${(props) => props.theme.black};
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 10rem;
  }

  ul {
    background-color: transparent;
    padding: 4rem 10rem;

    @media ${devices.laptop} {
      padding: 2rem 7rem;
    }

    @media ${devices.tablet} {
      padding: 2rem 5rem;
    }

    @media ${devices.phone} {
      padding: 2rem 4rem;
    }
  }
`
