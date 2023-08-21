import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'

export const TitleContainer = styled.div`
  main {
    padding: 0 10rem 10rem;

    @media ${devices.phone} {
      padding: 0 2rem 2rem;
    }
  }
`

export const TitleSectionH2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.red};
    font-size: 2rem;
    font-weight: 600;
  }
  color: ${(props) => props.theme.red};
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`

export const SectionLayout = styled.section`
  margin: 10rem 0;

  h3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.black};
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 1px;
  }
`

export const ResumeContainer = styled(SectionLayout)`
  p {
    white-space: pre-wrap;
    line-break: auto;
    text-align: justify;
    line-height: 2rem;
    font-weight: 500;
  }
`

export const TopScorerContainer = styled(SectionLayout)`
  h3 {
    span {
      font-size: 2.5rem;
      margin: 0 0.4rem 0 1rem;
      color: ${(props) => props.theme.red};
    }
  }
`

export const WinningSquadPhotoContainer = styled.div`
  img {
    max-width: 60rem;

    @media ${devices.phone} {
      max-width: 33rem;
    }
  }
`

export const FinalRankingContainer = styled.div`
  table {
    border-collapse: collapse;
    min-width: 300px;
    box-shadow:
      rgba(18, 30, 39, 0.2) 5px 5px,
      rgba(18, 30, 39, 0.2) 10px 10px;

    th {
      background-color: ${(props) => props.theme.red};
      padding: 0.5rem;
      text-align: center;
      color: ${(props) => props.theme.white};
      font-weight: 600;
      font-size: 1.3rem;
    }

    th:first-child {
      border-top-left-radius: 8px;
      text-align: left;
      padding-left: 1.5rem;
    }

    th:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }

    td {
      border-top: 2px solid ${(props) => props.theme.black};
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      text-align: center;
    }

    td:nth-child(2) {
      font-weight: 600;
    }

    tr:nth-child(odd) {
      background-color: #e5e5e5;
    }

    tr:hover {
      background-color: #a8a4a4;
    }

    td:first-child {
      padding-left: 1.5rem;
    }

    td:last-child {
      padding-right: 1.5rem;
    }
  }
`
