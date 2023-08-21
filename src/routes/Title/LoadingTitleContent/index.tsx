import TitleHeader from '../TitleHeader'
import { SkeletonSection, LoadingTitleContentContainer } from './styles'
import FlamengoFans from '../../../assets/flamengo-fans.webp'
import { Skeleton } from '@mui/material'

interface LoadingTitleContentProps {
  category: string
  year: string
}

export default function LoadingTitleContent({
  category,
  year,
}: LoadingTitleContentProps) {
  return (
    <LoadingTitleContentContainer>
      <TitleHeader category={category!} year={year!} coverImg={FlamengoFans} />
      <main>
        <SkeletonSection>
          <Skeleton
            variant="rectangular"
            width={400}
            height={70}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={500}
            height={30}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={500}
            height={30}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={500}
            height={30}
            animation="wave"
          />
        </SkeletonSection>

        <SkeletonSection>
          <Skeleton
            variant="rectangular"
            width={400}
            height={70}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={900}
            height={500}
            animation="wave"
          />
        </SkeletonSection>

        <SkeletonSection>
          <Skeleton
            variant="rectangular"
            width={400}
            height={70}
            animation="wave"
          />
          <div>
            <Skeleton
              variant="rectangular"
              width={400}
              height={500}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width={400}
              height={500}
              animation="wave"
            />
          </div>
        </SkeletonSection>
      </main>
    </LoadingTitleContentContainer>
  )
}
