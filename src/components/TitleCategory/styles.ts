import { styled } from 'styled-components'
import { devices } from '../../styles/mixins'

const PADDING_LEFT = '8rem'
const PADDING_LEFT_PHONE = '2rem'

export const CategoryImageContainer = styled.div`
  position: absolute;
  right: 2%;
  transform: translateY(-90%);

  @media ${devices.phone} {
    position: relative;
    transform: translateY(3rem);
    display: flex;
    justify-content: center;
  }

  img {
    transition: all 0.2s ease-out;
    z-index: 999;
    max-height: 20rem;
  }
`

export const TitleCategoryContainer = styled.li`
  list-style: none;
  position: relative;

  background-color: ${(props) => props.theme.black};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  h2 {
    color: ${(props) => props.theme.red};
    font-weight: 900;
    font-size: 3.5rem;
    letter-spacing: 2px;

    padding-left: ${PADDING_LEFT};
    padding-top: 2rem;

    span {
      line-height: inherit;
      color: ${(props) => props.theme.white};
      font-size: 2.5rem;
    }

    @media ${devices.phone} {
      padding-left: ${PADDING_LEFT_PHONE};
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
  }

  &:hover ${CategoryImageContainer} {
    img {
      transform: scale(1.1) translateY(-1.4rem);
    }
  }
`

export const TitlesYearsContainer = styled.ul`
  padding-left: ${PADDING_LEFT};
  margin-bottom: 2rem;
  max-height: 20rem;
  max-width: 50rem;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  list-style: none;

  @media ${devices.phone} {
    padding-left: ${PADDING_LEFT_PHONE};
    padding-right: ${PADDING_LEFT_PHONE};
    max-width: 100%;
    max-height: 100%;
  }

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const EnabledLink = styled.p`
  cursor: pointer;

  transition: all 0.2s ease-out;
`

export const DisabledLink = styled.p`
  color: ${(props) => props.theme.darkGray};
  cursor: not-allowed;
`
