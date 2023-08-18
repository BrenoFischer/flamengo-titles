import { styled } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

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

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  main {
    padding: 0 10rem 10rem;
  }
`

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
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
  font-family: 'Titillium Web', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`

const SectionLayout = styled.section`
  margin: 10rem 0;

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

    &:not(:last-child) {
      margin-left: -4px;
    }
  }
`

export const StadiumContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.black};
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;

  svg {
    margin-right: 0.3rem;
    margin-left: -4px;
    color: ${(props) => props.theme.black};
    font-size: 2.5rem;
  }

  img {
    transform: translateY(0);
  }

  span {
    color: ${(props) => props.theme.red};
    font-weight: 900;
    font-size: 2rem;
  }
`

export const DateContainer = styled.div`
  margin-top: 3rem;
  margin-left: 1px;

  color: ${(props) => props.theme.black};
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  font-size: 1.8rem;

  svg {
    margin-right: 0.3rem;
    color: ${(props) => props.theme.black};
    font-size: 2rem;
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
  }
`

export const SquadContainer = styled(SectionLayout)`
  table {
    border-collapse: collapse;
    min-width: 300px;
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
      padding-left: 1.5rem;
    }

    td:last-child {
      padding-right: 1.5rem;
    }

    tr:last-child {
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
    }
  }
`

export const SquadInformationContainer = styled.div`
  display: flex;
  gap: 20rem;
`

export const CheckboxWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    color: ${(props) => props.theme.black};
    font-size: 1rem;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
  }
`

export const CheckboxComponent = styled(Checkbox.Root)`
  height: 1rem;
  width: 1rem;
  position: relative;

  padding: 0.5rem;
`

export const CheckboxIcon = styled(CheckIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FootballFieldWrapper = styled.div`
  position: relative;
  max-height: 35rem;

  img {
    max-height: 35rem;
  }
`

interface PlayersOnFieldProps {
  left: string
  top: string
  showPlayersNames: boolean
}

export const PlayerOnField = styled.div<PlayersOnFieldProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};

  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.red};
  outline: 3px solid ${(props) => props.theme.black};

  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  font-size: 1.2rem;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 20px rgba(18, 30, 39, 0.4);

  &:hover > div {
    display: block;
  }

  & > div {
    display: ${(props) => (props.showPlayersNames ? 'block' : 'none')};
    position: absolute;
    z-index: 110;

    left: 50%;
    top: 125%;
    transform: translateX(-50%);

    background-color: ${(props) => props.theme.white};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;

    color: ${(props) => props.theme.black};
    font-size: 0.875rem;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
  }
`

export const FormationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${(props) => props.theme.black};
  font-size: 1.6rem;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;

  span {
    color: ${(props) => props.theme.red};
    font-size: 1.4rem;
    font-weight: 400;
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
      font-family: 'Titillium Web', sans-serif;
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
      font-family: 'Titillium Web', sans-serif;
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
