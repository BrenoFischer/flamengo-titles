import { DisabledLink, EnabledLink, TitleCategoryContainer } from './styles'
import { Link } from 'react-router-dom'

interface Title {
  year: string
  disabledLink: boolean
}

interface TitleCategoryProps {
  category: string
  titles: Title[]
  logo?: string
}

export default function TitleCategory({
  category,
  titles,
}: TitleCategoryProps) {
  const quantityOfTitles = titles.length

  return (
    <TitleCategoryContainer>
      <h2>
        {category} <span>({quantityOfTitles})</span>
      </h2>
      <div>
        {titles.map((title) =>
          title.disabledLink ? (
            <DisabledLink key={title.year}>{title.year}</DisabledLink>
          ) : (
            <Link key={title.year} to={`title/${category}/${title.year}`}>
              <EnabledLink>{title.year}</EnabledLink>
            </Link>
          ),
        )}
      </div>
    </TitleCategoryContainer>
  )
}
