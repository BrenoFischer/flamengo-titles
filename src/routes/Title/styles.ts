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

export const SquadContainer = styled(SectionLayout)`
  table {
    border-collapse: collapse;
    min-width: 50px;
    box-shadow:
      rgba(18, 30, 39, 0.2) 5px 5px,
      rgba(18, 30, 39, 0.2) 10px 10px;

    th {
      background-color: ${(props) => props.theme.red};
      padding: 0.5rem;
      text-align: left;
      color: ${(props) => props.theme.white};
      font-family: 'Titillium Web', sans-serif;
      font-weight: 600;
      font-size: 1.3rem;
    }

    th:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    th:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }

    td {
      border-top: 3px solid ${(props) => props.theme.black};
      padding: 0.5rem;
      font-size: 1rem;
      font-family: 'Titillium Web', sans-serif;
      font-weight: 400;
      line-height: 1.6;
    }

    td:first-child {
      width: 40%;
      padding-left: 1.5rem;
    }

    td:last-child {
      padding-right: 1.5rem;
    }
  }
`
