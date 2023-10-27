import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Scratch } from '../Header/styles'

import {
  CategoryImageContainer,
  DisabledLink,
  EnabledLink,
  PlayerImg,
  TitleCategoryContainer,
  TitlesYearsContainer,
} from './styles'

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

  const animationDuration = 1

  return (
    <TitleCategoryContainer whileHover="grow">
      <Scratch $isBottom={true} />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: animationDuration }}
        viewport={{ once: true }}
      >
        {category}{' '}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: animationDuration }}
          viewport={{ once: true }}
        >
          ({quantityOfTitles})
        </motion.span>
      </motion.h2>
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
        <PlayerImg
          initial={{ scale: 0 }}
          whileInView={{ scale: [1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={playerCategoryPhoto}
          variants={{
            initial: { scale: 1 },
            grow: { scale: 1.2, translateY: -2 },
          }}
          alt=""
        />
      </CategoryImageContainer>
      <Scratch />
    </TitleCategoryContainer>
  )
}
