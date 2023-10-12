import styled from 'styled-components'

export const CarouselFiltersContainer = styled.div`
  margin-bottom: 1rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`

interface FilterItemProps {
  categoryColor: string | undefined
  isFiltered: boolean
}

export const FilterItem = styled.li<FilterItemProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  border: ${(props) =>
    props.isFiltered ? '1px solid black' : '1px solid transparent'};

  font-size: 0.8rem;
  line-height: 0;
  list-style: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.gray};

  color: ${(props) =>
    props.isFiltered ? props.theme.black : props.theme.darkGray};

  div {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.categoryColor};
  }

  svg {
    cursor: pointer;
    display: inline-flex;
    align-self: center;
    color: ${(props) => props.theme.black};
  }
`
