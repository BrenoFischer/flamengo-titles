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
  const [checked, setChecked] = useState(activeFilters.includes(filter))

  function handleOnClick() {
    if (activeFilters.length !== 1 && checked) {
      setChecked(false)
      excludeFilter(filter)
    } else if (!checked) {
      setChecked(true)
      addFilter(filter)
    }
  }

  return (
    <FilterItemContainer
      animate={
        checked
          ? { y: 0, x: 0, boxShadow: '4px 4px 0px 1px gray' }
          : { y: 4, x: 4, boxShadow: '0' }
      }
      transition={{ type: 'spring' }}
      isDisabled={activeFilters.length === 1 && checked}
      isFiltered={checked}
      onClick={handleOnClick}
    >
      <CategoryColorIndicator categoryColor={categoryToColorMap.get(filter)} />
      {filter}
      <CheckboxContainer
        checked={checked}
        disabled={activeFilters.length === 1 && checked}
      >
        <CheckboxIndicator>{checked && <CheckIcon />}</CheckboxIndicator>
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
