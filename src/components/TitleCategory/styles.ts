import { styled } from 'styled-components'

export const TitleCategoryContainer = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  h2 {
    color: ${(props) => props.theme.red};
    font-family: 'Titillium Web', sans-serif;
    font-weight: 900;
    font-size: 3.5rem;
    letter-spacing: 2px;

    span {
      line-height: inherit;
      color: ${(props) => props.theme.black};
      font-size: 2.5rem;
    }
  }

  & > div {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  p {
    padding: 1rem 2rem;
    border: 2px solid ${(props) => props.theme.black};
    cursor: pointer;

    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;

    transition: all 0.1s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.red};
      color: ${(props) => props.theme.white};
      border: 2px solid ${(props) => props.theme.red};
    }
  }
`
