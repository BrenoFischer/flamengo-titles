import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

import { BackgroundImageContainer } from './styles'

interface BackgroundImageParallaxProps {
  speed: string[]
  image: string
  top?: string
  right?: string
}

export default function BackgroundImageParallax({
  speed,
  image,
  top,
  right,
}: BackgroundImageParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], speed)

  return (
    <BackgroundImageContainer $top={top} $right={right}>
      <motion.img
        style={{ y: imageY }}
        src={image}
        alt="Flamengo player after scoring a goal"
      />
    </BackgroundImageContainer>
  )
}
