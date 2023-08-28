import { styled } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { SectionLayout } from '../styles'
import { devices } from '../../../styles/mixins'

export const SquadContainer = styled(SectionLayout)`
  table {
    border-collapse: collapse;
    box-shadow:
      rgba(18, 30, 39, 0.2) 5px 5px,
      rgba(18, 30, 39, 0.2) 10px 10px;

    min-width: 300px;

    th {
      background-color: ${(props) => props.theme.red};
      padding: 0.5rem;
      text-align: left;
      color: ${(props) => props.theme.white};
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

  @media ${devices.laptop} {
    gap: 5%;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    gap: 5rem;
  }
`

export const FootballFieldWrapper = styled.div`
  position: relative;
  max-height: 35rem;

  img {
    max-height: 35rem;

    @media ${devices.tablet} {
      min-width: 100%;
    }
  }
`

export const CheckboxWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    color: ${(props) => props.theme.black};
    font-size: 1rem;
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
    font-weight: 400;
  }
`

export const FormationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${(props) => props.theme.black};
  font-size: 1.6rem;
  font-weight: 600;

  span {
    color: ${(props) => props.theme.red};
    font-size: 1.4rem;
    font-weight: 400;
  }
`
