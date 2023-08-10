import { TitleCategoryContainer } from './styles'
import { Link } from 'react-router-dom'

interface TitleCategoryProps {
  category: string
  titles: string[]
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
        {titles.map((title) => (
          <Link key={title} to={`title/${category}/${title}`}>
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </TitleCategoryContainer>
  )
}
