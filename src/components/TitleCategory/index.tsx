import { TitleCategoryContainer } from './styles'
import { getTitleInformation } from '../../utils/firebase/firebase'

interface TitleCategoryProps {
  category: string
  titles: string[]
}

export default function TitleCategory({
  category,
  titles,
}: TitleCategoryProps) {
  const quantityOfTitles = titles.length

  async function handleGetTitleInformation(title: string) {
    await getTitleInformation(category, title)
  }

  return (
    <TitleCategoryContainer>
      <h2>
        {category} <span>({quantityOfTitles})</span>
      </h2>
      <div>
        {titles.map((title) => (
          <p key={title} onClick={() => handleGetTitleInformation(title)}>
            {title}
          </p>
        ))}
      </div>
    </TitleCategoryContainer>
  )
}
