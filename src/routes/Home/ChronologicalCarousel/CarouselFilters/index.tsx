import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import { CarouselFiltersContainer, FilterItem } from './styles'
import { CarouselFiltersContext } from '../../../../contexts/CarouselFilterContext'
import { categoryToColorMap } from '..'

export default function CarouselFilters() {
  const { activeFilters, inactiveFilters, excludeFilter, addFilter } =
    useContext(CarouselFiltersContext)

  function handleExcludeFilter(filter: string) {
    excludeFilter(filter)
  }

  function handleAddFilter(filter: string) {
    addFilter(filter)
  }

  return (
    <CarouselFiltersContainer>
      <ul>
        {activeFilters.map((filter) => (
          <FilterItem
            key={filter}
            categoryColor={categoryToColorMap.get(filter)}
            isFiltered={true}
          >
            <div />
            {filter}{' '}
            <AiOutlineClose onClick={() => handleExcludeFilter(filter)} />
          </FilterItem>
        ))}
      </ul>

      <ul>
        {inactiveFilters.map((filter) => (
          <FilterItem
            key={filter}
            categoryColor={categoryToColorMap.get(filter)}
            isFiltered={false}
          >
            <div />
            {filter} <IoMdAdd onClick={() => handleAddFilter(filter)} />
          </FilterItem>
        ))}
      </ul>
    </CarouselFiltersContainer>
  )
}
