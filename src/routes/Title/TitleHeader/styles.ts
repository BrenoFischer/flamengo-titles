import { styled } from 'styled-components'
import { devices } from '../../../styles/mixins'

export const TitleHeaderContainer = styled.header`
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
    font-weight: 900;
    font-size: 5rem;
    letter-spacing: 2px;
    text-shadow: 4px 4px 20px #000;

    @media ${devices.phone} {
      font-size: 4.5rem;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
`

export const FlamengoLogoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;

  img {
    height: 4rem;
  }
`
