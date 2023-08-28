import Carousel from 'nuka-carousel'
import {
  CategoryColorIndicator,
  ChronologicalCarouselContainer,
  ChronologicalDot,
  ChronologicalLine,
  DecadeContainer,
  IconsContainer,
  LeftLine,
  LinkIconContainer,
  RightLine,
  SlideArrowContainer,
  SlideContainer,
  SlideWrapper,
  SliderWrapperNotClickable,
  SuperStarWrapper,
} from './styles'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { slides } from './carouselSlides'
import { useMediaQuery } from 'react-responsive'

interface SlideArrowProps {
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>
  arrowIcon: React.ReactNode
  rightArrow: boolean
  buttonDisabled: boolean
}

function SlideArrow({
  handleOnClick,
  arrowIcon,
  rightArrow,
  buttonDisabled,
}: SlideArrowProps) {
  return (
    <SlideArrowContainer onClick={handleOnClick} rightArrow={rightArrow}>
      {!buttonDisabled && arrowIcon}
    </SlideArrowContainer>
  )
}

export default function ChronologicalCarousel() {
  // const isLaptop = useMediaQuery({ query: '(max-width: 1200px)' })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1800px)' })
  const isPhone = useMediaQuery({ query: '(max-width: 600px)' })
  // const isTablet = useMediaQuery({ query: '(max-width: 800px)' })

  interface SlideProps {
    year: string
    category: string
    star: boolean
    superStar: boolean
    slideNumber: number
    hasLink: boolean
    firstOfDecade: { first: boolean; decade: string }
  }

  function Slide({
    year,
    category,
    star,
    superStar,
    slideNumber,
    hasLink,
    firstOfDecade,
  }: SlideProps) {
    const categoryToColorMap = new Map<string, string>([
      ['Carioca', '#3944BC'],
      ['Libertadores', '#DA9100'],
      ['Brasileiro', '#228B22'],
      ['CopaDoBrasil', '#0492C2'],
      ['Mercosul', '#592693'],
      ['Mundial', '#FFD700'],
    ])

    const categoryColor = categoryToColorMap.get(category)

    return (
      <SlideContainer>
        <IconsContainer>
          {superStar && (
            <SuperStarWrapper>
              <AiFillStar />
            </SuperStarWrapper>
          )}
          {star && !superStar && <AiFillStar />}
          {hasLink && (
            <LinkIconContainer>
              <BiLinkExternal />
            </LinkIconContainer>
          )}
        </IconsContainer>
        {hasLink ? (
          <SlideWrapper to={`title/${category}/${year}`}>
            <p>{year}</p>
            <span>
              <CategoryColorIndicator color={categoryColor!} />
              {category}
            </span>
          </SlideWrapper>
        ) : (
          <SliderWrapperNotClickable>
            <p>{year}</p>
            <span>
              <CategoryColorIndicator color={categoryColor!} />
              {category}
            </span>
          </SliderWrapperNotClickable>
        )}
        <ChronologicalLine>
          <LeftLine firstSlide={slideNumber === 1} />
          <RightLine lastSlide={slideNumber === slides.length} />
          <ChronologicalDot />
        </ChronologicalLine>
        <DecadeContainer>
          {firstOfDecade.first && firstOfDecade.decade}
        </DecadeContainer>
      </SlideContainer>
    )
  }

  return (
    <ChronologicalCarouselContainer>
      <Carousel
        slidesToShow={isPhone ? 2 : 6}
        slidesToScroll={2}
        renderBottomCenterControls={() => null}
        // dragging={false}
        disableEdgeSwiping={true}
        renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
          <SlideArrow
            rightArrow={false}
            handleOnClick={previousSlide}
            buttonDisabled={previousDisabled}
            arrowIcon={<HiArrowLeft size={isPhone ? 20 : 40} />}
          />
        )}
        renderCenterRightControls={({ nextSlide, nextDisabled }) => (
          <SlideArrow
            rightArrow={true}
            handleOnClick={nextSlide}
            buttonDisabled={nextDisabled}
            arrowIcon={<HiArrowRight size={isPhone ? 20 : 40} />}
          />
        )}
      >
        {slides.map((slide) => {
          const year = slide.year
          const category = slide.category
          const star = slide.star
          const superStar = slide.superStar
          const slideNumber = slide.slideNumber
          const hasLink = slide.hasLink
          const firstOfDecade = slide.firstOfDecade

          return (
            <Slide
              key={slideNumber}
              slideNumber={slideNumber}
              year={year}
              category={category}
              star={star}
              superStar={superStar}
              hasLink={hasLink}
              firstOfDecade={firstOfDecade}
            />
          )
        })}
      </Carousel>
    </ChronologicalCarouselContainer>
  )
}
