import { styled } from 'styled-components'
import { SectionLayout } from '../styles'
import { devices } from '../../../styles/mixins'

export const LastMatchContainer = styled(SectionLayout)`
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media ${devices.phone} {
      justify-content: center;
    }
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

  @media ${devices.phone} {
    flex-direction: column;
  }

  color: ${(props) => props.theme.black};
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
  font-weight: 600;
  font-size: 1.8rem;

  svg {
    margin-right: 0.3rem;
    color: ${(props) => props.theme.black};
    font-size: 2rem;
  }
`
