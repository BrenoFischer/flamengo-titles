import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'
import CoverPhoto from '../../assets/cover.jpg'
import PaperBorder from '../../assets/paper-border.png'

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.1)
    ),
    url(${CoverPhoto});

  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  position: relative;

  box-shadow: 0 0 15px #000;

  @media ${devices.phone} {
    background-attachment: scroll;
  }

  > video {
    position: absolute;
    top: 16rem;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(50% - 10rem);
    object-fit: cover;

    @media ${devices.phone} {
      top: 18rem;
      height: calc(50% - 22rem);
    }
  }

  > h1 {
    height: calc(50% - 10rem);
    display: flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: screen;
    user-select: none;
    text-transform: uppercase;

    letter-spacing: 20px;
    color: #000;
    background-color: ${(props) => props.theme.white};
    font-family: 'Young serif', sans-serif;
    font-weight: 700;
    font-size: 10rem;

    @media ${devices.tablet} {
      letter-spacing: 3px;
      font-size: 6rem;
      padding: 0 1rem;
    }

    @media ${devices.phone} {
      height: calc(50% - 20rem);
      font-size: 5.3rem;
    }
  }

  > h2 {
    padding: 4rem 15rem 0 20rem;
    color: ${(props) => props.theme.white};
    font-size: 2.2rem;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;

    -webkit-filter: drop-shadow(0 0 3px #000);
    filter: drop-shadow(0 0 3px #000);

    @media ${devices.laptop} {
      padding: 4rem;
    }
  }
`

export const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 1;

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 10rem;
    z-index: 10;
    -webkit-filter: drop-shadow(0 0 3px #000);
    filter: drop-shadow(0 0 3px #000);
  }
`

interface ScratchProps {
  $isBottom?: boolean
}

export const Scratch = styled.div<ScratchProps>`
  background-color: transparent;
  height: 2rem;
  background-image: url(${PaperBorder});
  transform: ${(props) =>
    props.$isBottom ? 'rotate(0deg)' : 'rotate(180deg)'};

  @media ${devices.phone} {
    height: 3rem;

    transform: ${(props) =>
      props.$isBottom
        ? 'rotate(1deg) translateY(-5px)'
        : 'rotate(181deg) translateY(-5px)'};
  }
`
