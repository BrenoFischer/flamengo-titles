import { UpperHeader } from './styles'
import FlamengoLogo from '../../assets/flamengo.png'
import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

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
        vencer, vencer, <span>vencer</span>
      </Phrase>,
      <Phrase key={5}>
        Uma vez <span>Flamengo</span>, Flamengo até morrer
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
        {headerPhrases[phraseIndex][0]}
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
        {headerPhrases[phraseIndex][1]}
      </UpperHeader>
      <div></div>
    </header>
  )
}
