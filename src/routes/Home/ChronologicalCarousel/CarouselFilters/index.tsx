import { useContext, useState } from 'react'

import {
  CarouselFiltersContainer,
  CategoryColorIndicator,
  CheckboxContainer,
  CheckboxIndicator,
  FilterItemContainer,
} from './styles'
import { CarouselFiltersContext } from '../../../../contexts/CarouselFilterContext'
import { categoryToColorMap } from '..'
import { CheckIcon } from '@radix-ui/react-icons'

function FilterItem({ filter }: { filter: string }) {
  const { activeFilters, excludeFilter, addFilter } = useContext(
    CarouselFiltersContext,
  )
  const [checked, setChecked] = useState(true)

  function handleOnClick() {
    if (checked) excludeFilter(filter)
    else addFilter(filter)
  }

  return (
    <FilterItemContainer isFiltered={checked}>
      <CategoryColorIndicator categoryColor={categoryToColorMap.get(filter)} />
      {filter}
      <CheckboxContainer
        defaultChecked
        checked={checked}
        disabled={activeFilters.length === 1 && checked}
        onCheckedChange={setChecked}
        onClick={handleOnClick}
      >
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxContainer>
    </FilterItemContainer>
  )
}

export default function CarouselFilters() {
  const allCategories = [
    'Brasileiro',
    'Carioca',
    'CopaDoBrasil',
    'Libertadores',
    'Mercosul',
    'Mundial',
  ]

  return (
    <CarouselFiltersContainer>
      <ul>
        {allCategories.map((filter) => (
          <FilterItem key={filter} filter={filter} />
        ))}
      </ul>
    </CarouselFiltersContainer>
  )
}
