import {
  FirstPhraseWrapper,
  LowerHeader,
  SecondPhraseWrapper,
  UpperHeader,
} from './styles'
import FlamengoLogo from '../../assets/flamengo.png'
import { useEffect, useState, useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { LanguageContext } from '../../contexts/LanguageContext'
import ReactCountryFlag from 'react-country-flag'

interface PhraseProps {
  children: React.ReactNode
}

function Phrase({ children }: PhraseProps) {
  const animatedPhrase = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    config: { duration: 300 },
  })

  return (
    <animated.div style={animatedPhrase}>
      <p>{children}</p>
    </animated.div>
  )
}

export default function Header() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const { activeLanguage, changeActiveLanguage } = useContext(LanguageContext)

  const headerPhrases = [
    [
      <Phrase key={0}>
        Uma vez <span>Flamengo</span>,
      </Phrase>,
      <Phrase key={1}>
        sempre <span>Flamengo</span>.
      </Phrase>,
    ],
    [
      <Phrase key={2}>
        Flamengo <span>sempre</span>
      </Phrase>,
      <Phrase key={3}>
        eu <span>hei</span> de ser.
      </Phrase>,
    ],
    [
      <Phrase key={4}>
        Vencer, vencer, <span>vencer</span>,
      </Phrase>,
      <Phrase key={5}>
        uma vez <span>Flamengo</span>, Flamengo até morrer.
      </Phrase>,
    ],
  ]

  useEffect(() => {
    const phrasesLength = headerPhrases.length

    const interval = setInterval(() => {
      if (phraseIndex >= phrasesLength - 1) {
        setPhraseIndex(0)
      } else {
        setPhraseIndex(phraseIndex + 1)
      }
    }, 7000)

    return () => clearInterval(interval)
  }, [phraseIndex])

  return (
    <header>
      <UpperHeader>
        <FirstPhraseWrapper>{headerPhrases[phraseIndex][0]}</FirstPhraseWrapper>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
        <SecondPhraseWrapper>
          {headerPhrases[phraseIndex][1]}
        </SecondPhraseWrapper>
      </UpperHeader>
      <LowerHeader>
        <>
          <ReactCountryFlag
            onClick={() => changeActiveLanguage('PT')}
            svg
            countryCode={'BR'}
            style={{
              fontSize: '2.2rem',
              cursor: 'pointer',
              borderBottom:
                activeLanguage === 'PT'
                  ? '3px solid black'
                  : '3px solid transparent',
              padding: '0 0.1rem',
            }}
          />
          <ReactCountryFlag
            onClick={() => changeActiveLanguage('EN')}
            svg
            countryCode={'US'}
            style={{
              fontSize: '2.2rem',
              cursor: 'pointer',
              borderBottom:
                activeLanguage === 'EN'
                  ? '3px solid black'
                  : '3px solid transparent',
              padding: '0 0.1rem',
            }}
          />
        </>
      </LowerHeader>
    </header>
  )
}
