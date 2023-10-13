import styled from 'styled-components'
import { devices } from '../../styles/mixins'

interface BackgroundImageContainerProps {
  top?: string
  right?: string
}

export const BackgroundImageContainer = styled.div<BackgroundImageContainerProps>`
  position: relative;
  z-index: -1;

  img {
    opacity: 0.5;
    position: absolute;
    top: ${(props) => (props.top ? props.top : '10rem')};
    right: ${(props) => (props.right ? props.right : '0')};

    @media ${devices.tablet} {
      width: 25rem;
      top: 30rem;
    }
  }
`
