import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const CarouselFiltersContainer = styled.div`
  margin-bottom: 1rem;
  margin-left: 4rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`

interface FilterItemProps {
  isFiltered: boolean
}

export const FilterItemContainer = styled.li<FilterItemProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  height: 2rem;

  border: ${(props) =>
    props.isFiltered
      ? `2px solid ${props.theme.black}`
      : `2px solid ${props.theme.black}`};

  font-size: 0.8rem;
  line-height: 0;
  list-style: none;
  padding-left: 0.5rem;
  background-color: ${(props) =>
    props.isFiltered ? props.theme.white : props.theme.gray};

  color: ${(props) =>
    props.isFiltered ? props.theme.black : props.theme.darkGray};

  svg {
    cursor: pointer;
    display: inline-flex;
    align-self: center;
    color: ${(props) => props.theme.black};
  }
`

interface CategoryColorIndicatorProps {
  categoryColor: string | undefined
}

export const CategoryColorIndicator = styled.div<CategoryColorIndicatorProps>`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.categoryColor};
`

export const CheckboxContainer = styled(Checkbox.Root)`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  border: none;
  border-left: 2px solid ${(props) => props.theme.black};
  background-color: ${(props) =>
    props.checked ? props.theme.white : props.theme.gray};
  width: 25px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.red};
`
