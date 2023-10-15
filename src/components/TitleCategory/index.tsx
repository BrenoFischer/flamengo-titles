import {
  CategoryImageContainer,
  DisabledLink,
  EnabledLink,
  TitleCategoryContainer,
  TitlesYearsContainer,
} from './styles'
import { Link } from 'react-router-dom'
import { Scratch } from '../Header/styles'

interface Title {
  year: string
  disabledLink: boolean
}

interface TitleCategoryProps {
  category: string
  titles: Title[]
  logo?: string
  playerCategoryPhoto: string
}

export default function TitleCategory({
  category,
  titles,
  playerCategoryPhoto,
}: TitleCategoryProps) {
  const quantityOfTitles = titles.length

  const categoryWithoutSpaces = category.replace(/\s/g, '')

  return (
    <TitleCategoryContainer>
      <Scratch $isBottom={true} />
      <h2>
        {category} <span>({quantityOfTitles})</span>
      </h2>
      <TitlesYearsContainer>
        {titles.map((title) =>
          title.disabledLink ? (
            <DisabledLink key={title.year}>{title.year}</DisabledLink>
          ) : (
            <Link
              key={title.year}
              to={`title/${categoryWithoutSpaces}/${title.year}`}
            >
              <EnabledLink>{title.year}</EnabledLink>
            </Link>
          ),
        )}
      </TitlesYearsContainer>
      <CategoryImageContainer>
        <img src={playerCategoryPhoto} alt="" />
      </CategoryImageContainer>
      <Scratch />
    </TitleCategoryContainer>
  )
}
