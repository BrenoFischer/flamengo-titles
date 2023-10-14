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

    font-weight: 600;
    font-size: 1.2rem;
  }
`

export const EnabledLink = styled.p`
  border: 2px solid ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  cursor: pointer;

  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.red};
    color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.black};
    box-shadow: 4px 4px 0px 1px gray;
    transform: translate(-4px, -4px);
  }
`

export const DisabledLink = styled.p`
  border: 2px solid ${(props) => props.theme.darkGray};
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.darkGray};
  cursor: not-allowed;
`
