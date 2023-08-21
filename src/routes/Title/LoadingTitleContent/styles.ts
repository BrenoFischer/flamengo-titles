import { styled } from 'styled-components'

export const LoadingTitleContentContainer = styled.div`
  main {
    padding: 0 10rem 10rem;
    margin-top: 10rem;
  }
`

export const SkeletonSection = styled.section`
  &:not(:last-child) {
    margin-bottom: 10rem;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    gap: 20rem;
  }
`
