import { TitleCategoryContainer } from './styles'

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
          <p key={title}>{title}</p>
        ))}
      </div>
    </TitleCategoryContainer>
  )
}
