import { styled } from 'styled-components'

export const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  img {
    height: 10rem;
  }

  h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme.red};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.black};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.red};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
  }
`

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  gap: 0.5rem;
`
