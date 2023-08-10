import { styled } from 'styled-components'

export const TitleContainer = styled.div`
  header {
    width: 100%;
    height: 30rem;
    position: relative;
    box-shadow: 0 0 20px #000;

    h1 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: ${(props) => props.theme.white};
      font-family: 'Titillium Web', sans-serif;
      font-weight: 900;
      font-size: 5rem;
      letter-spacing: 2px;
      text-shadow: 4px 4px 20px #000;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  main {
    padding: 0 10rem 10rem;
  }
`

const SectionLayout = styled.section`
  margin: 10rem 0;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme.red};
      font-size: 2rem;
      font-weight: 600;
    }
    color: ${(props) => props.theme.red};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }

  h3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.black};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 1px;
  }
`

export const LastMatchContainer = styled(SectionLayout)`
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h3 {
    span {
      font-size: 2.5rem;
      margin: 0 1rem;
      color: ${(props) => props.theme.red};
    }
  }

  img {
    transform: translateY(15%);
  }
`

export const TopScorerContainer = styled(SectionLayout)`
  h3 {
    span {
      font-size: 2.5rem;
      margin: 0 1rem;
      color: ${(props) => props.theme.red};
    }
  }
`

export const SquadContainer = styled(SectionLayout)``
