import Carousel from 'nuka-carousel'
import {
  ChronologicalCarouselContainer,
  ChronologicalDot,
  ChronologicalLine,
  IconsContainer,
  LeftLine,
  LinkIconContainer,
  RightLine,
  SlideArrowContainer,
  SlideContainer,
  SlideWrapper,
  SliderWrapperNotClickable,
} from './styles'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'

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
  const slides = [
    {
      year: '1914',
      category: 'Carioca',
      star: false,
      slideNumber: 1,
      hasLink: false,
    },
    {
      year: '1915',
      category: 'Carioca',
      star: false,
      slideNumber: 2,
      hasLink: false,
    },
    {
      year: '1920',
      category: 'Carioca',
      star: false,
      slideNumber: 3,
      hasLink: false,
    },
    {
      year: '1921',
      category: 'Carioca',
      star: false,
      slideNumber: 4,
      hasLink: false,
    },
    {
      year: '1925',
      category: 'Carioca',
      star: false,
      slideNumber: 5,
      hasLink: false,
    },
    {
      year: '1927',
      category: 'Carioca',
      star: false,
      slideNumber: 6,
      hasLink: false,
    },
    {
      year: '1939',
      category: 'Carioca',
      star: false,
      slideNumber: 7,
      hasLink: false,
    },
    {
      year: '1942',
      category: 'Carioca',
      star: true,
      slideNumber: 8,
      hasLink: false,
    },
    {
      year: '1943',
      category: 'Carioca',
      star: true,
      slideNumber: 9,
      hasLink: false,
    },
    {
      year: '1944',
      category: 'Carioca',
      star: true,
      slideNumber: 10,
      hasLink: false,
    },
    {
      year: '1953',
      category: 'Carioca',
      star: true,
      slideNumber: 11,
      hasLink: false,
    },
    {
      year: '1954',
      category: 'Carioca',
      star: true,
      slideNumber: 12,
      hasLink: false,
    },
    {
      year: '1955',
      category: 'Carioca',
      star: true,
      slideNumber: 13,
      hasLink: false,
    },
    {
      year: '1963',
      category: 'Carioca',
      star: false,
      slideNumber: 14,
      hasLink: false,
    },
    {
      year: '1965',
      category: 'Carioca',
      star: false,
      slideNumber: 15,
      hasLink: false,
    },
    {
      year: '1972',
      category: 'Carioca',
      star: false,
      slideNumber: 16,
      hasLink: false,
    },
    {
      year: '1974',
      category: 'Carioca',
      star: false,
      slideNumber: 17,
      hasLink: false,
    },
    {
      year: '1978',
      category: 'Carioca',
      star: false,
      slideNumber: 18,
      hasLink: false,
    },
    {
      year: '1979',
      category: 'Carioca',
      star: false,
      slideNumber: 19,
      hasLink: false,
    },
    {
      year: '1979.2',
      category: 'Carioca',
      star: false,
      slideNumber: 20,
      hasLink: false,
    },
    {
      year: '1980',
      category: 'Brasileiro',
      star: true,
      slideNumber: 21,
      hasLink: false,
    },
    {
      year: '1981',
      category: 'Libertadores',
      star: true,
      slideNumber: 22,
      hasLink: true,
    },
    {
      year: '1981',
      category: 'Mundial',
      star: true,
      slideNumber: 23,
      hasLink: true,
    },
    {
      year: '1981',
      category: 'Carioca',
      star: false,
      slideNumber: 24,
      hasLink: false,
    },
    {
      year: '1982',
      category: 'Brasileiro',
      star: true,
      slideNumber: 25,
      hasLink: false,
    },
    {
      year: '1983',
      category: 'Brasileiro',
      star: true,
      slideNumber: 26,
      hasLink: false,
    },
    {
      year: '1986',
      category: 'Carioca',
      star: false,
      slideNumber: 27,
      hasLink: false,
    },
    {
      year: '1990',
      category: 'CopaDoBrasil',
      star: true,
      slideNumber: 28,
      hasLink: false,
    },
    {
      year: '1991',
      category: 'Carioca',
      star: false,
      slideNumber: 29,
      hasLink: false,
    },
    {
      year: '1992',
      category: 'Brasileiro',
      star: true,
      slideNumber: 30,
      hasLink: false,
    },
    {
      year: '1996',
      category: 'Carioca',
      star: false,
      slideNumber: 31,
      hasLink: false,
    },
    {
      year: '1999',
      category: 'Mercosul',
      star: false,
      slideNumber: 32,
      hasLink: false,
    },
    {
      year: '1999',
      category: 'Carioca',
      star: true,
      slideNumber: 33,
      hasLink: false,
    },
    {
      year: '2000',
      category: 'Carioca',
      star: true,
      slideNumber: 34,
      hasLink: false,
    },
    {
      year: '2001',
      category: 'Carioca',
      star: true,
      slideNumber: 35,
      hasLink: false,
    },
    {
      year: '2004',
      category: 'Carioca',
      star: false,
      slideNumber: 36,
      hasLink: false,
    },
    {
      year: '2006',
      category: 'CopaDoBrasil',
      star: true,
      slideNumber: 37,
      hasLink: false,
    },
    {
      year: '2007',
      category: 'Carioca',
      star: true,
      slideNumber: 38,
      hasLink: false,
    },
    {
      year: '2008',
      category: 'Carioca',
      star: true,
      slideNumber: 39,
      hasLink: false,
    },
    {
      year: '2009',
      category: 'Carioca',
      star: true,
      slideNumber: 40,
      hasLink: false,
    },
    {
      year: '2009',
      category: 'Brasileiro',
      star: true,
      slideNumber: 41,
      hasLink: true,
    },
    {
      year: '2011',
      category: 'Carioca',
      star: false,
      slideNumber: 42,
      hasLink: false,
    },
    {
      year: '2013',
      category: 'CopaDoBrasil',
      star: true,
      slideNumber: 43,
      hasLink: false,
    },
    {
      year: '2014',
      category: 'Carioca',
      star: false,
      slideNumber: 44,
      hasLink: false,
    },
    {
      year: '2017',
      category: 'Carioca',
      star: false,
      slideNumber: 45,
      hasLink: false,
    },
    {
      year: '2019',
      category: 'Carioca',
      star: true,
      slideNumber: 46,
      hasLink: false,
    },
    {
      year: '2019',
      category: 'Brasileiro',
      star: true,
      slideNumber: 47,
      hasLink: false,
    },
    {
      year: '2019',
      category: 'Libertadores',
      star: true,
      slideNumber: 48,
      hasLink: true,
    },
    {
      year: '2020',
      category: 'Carioca',
      star: true,
      slideNumber: 49,
      hasLink: false,
    },
    {
      year: '2020',
      category: 'Brasileiro',
      star: true,
      slideNumber: 50,
      hasLink: true,
    },
    {
      year: '2021',
      category: 'Carioca',
      star: true,
      slideNumber: 51,
      hasLink: false,
    },
    {
      year: '2022',
      category: 'CopaDoBrasil',
      star: true,
      slideNumber: 52,
      hasLink: true,
    },
    {
      year: '2022',
      category: 'Libertadores',
      star: true,
      slideNumber: 53,
      hasLink: true,
    },
  ]

  interface SlideProps {
    year: string
    category: string
    star: boolean
    slideNumber: number
    hasLink: boolean
  }

  function Slide({ year, category, star, slideNumber, hasLink }: SlideProps) {
    return (
      <SlideContainer>
        <IconsContainer>
          {star && <AiFillStar />}
          {hasLink && (
            <LinkIconContainer>
              <BiLinkExternal />
            </LinkIconContainer>
          )}
        </IconsContainer>
        {hasLink ? (
          <SlideWrapper to={`title/${category}/${year}`}>
            <p>{year}</p>
            <span>{category}</span>
          </SlideWrapper>
        ) : (
          <SliderWrapperNotClickable>
            <p>{year}</p>
            <span>{category}</span>
          </SliderWrapperNotClickable>
        )}
        <ChronologicalLine>
          <LeftLine firstSlide={slideNumber === 1} />
          <RightLine lastSlide={slideNumber === slides.length} />
          <ChronologicalDot />
        </ChronologicalLine>
      </SlideContainer>
    )
  }

  return (
    <ChronologicalCarouselContainer>
      <Carousel
        slidesToShow={6}
        slidesToScroll={2}
        renderBottomCenterControls={() => null}
        dragging={false}
        disableEdgeSwiping={true}
        renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
          <SlideArrow
            rightArrow={false}
            handleOnClick={previousSlide}
            buttonDisabled={previousDisabled}
            arrowIcon={<HiArrowLeft size={40} />}
          />
        )}
        renderCenterRightControls={({ nextSlide, nextDisabled }) => (
          <SlideArrow
            rightArrow={true}
            handleOnClick={nextSlide}
            buttonDisabled={nextDisabled}
            arrowIcon={<HiArrowRight size={40} />}
          />
        )}
      >
        {slides.map((slide) => {
          const year = slide.year
          const category = slide.category
          const star = slide.star
          const slideNumber = slide.slideNumber
          const hasLink = slide.hasLink

          return (
            <Slide
              key={slideNumber}
              slideNumber={slideNumber}
              year={year}
              category={category}
              star={star}
              hasLink={hasLink}
            />
          )
        })}
      </Carousel>
    </ChronologicalCarouselContainer>
  )
}
