import { ReactNode, createContext, useState } from 'react'

interface CarouselFiltersContextType {
  activeFilters: string[]
  inactiveFilters: string[]
  excludeFilter: (filter: string) => void
  addFilter: (filter: string) => void
}

export const CarouselFiltersContext = createContext(
  {} as CarouselFiltersContextType,
)

interface CarouselFiltersContextProviderProps {
  children: ReactNode
}

export function CarouselFiltersContextProvider({
  children,
}: CarouselFiltersContextProviderProps) {
  const allCategories = [
    'Brasileiro',
    'Carioca',
    'CopaDoBrasil',
    'Libertadores',
    'Mercosul',
    'Mundial',
  ]
  const [activeFilters, setActiveFilters] = useState(allCategories)
  const [inactiveFilters, setInactiveFilters] = useState<string[]>([])

  function excludeFilter(filterToExclude: string) {
    const newFilters = activeFilters.filter(
      (filter) => filter !== filterToExclude,
    )

    setActiveFilters(newFilters)
    setInactiveFilters((inactiveFilters) => [
      ...inactiveFilters,
      filterToExclude,
    ])
  }

  function addFilter(filterToAdd: string) {
    const newFilters = inactiveFilters.filter(
      (filter) => filter !== filterToAdd,
    )

    setInactiveFilters(newFilters)
    setActiveFilters((activeFilters) => [...activeFilters, filterToAdd])
  }

  return (
    <CarouselFiltersContext.Provider
      value={{ activeFilters, inactiveFilters, excludeFilter, addFilter }}
    >
      {children}
    </CarouselFiltersContext.Provider>
  )
}
