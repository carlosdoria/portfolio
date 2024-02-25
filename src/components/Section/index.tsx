import { ReactNode } from 'react'
import * as S from './styles'

interface SectionProps {
  id: string
  children: ReactNode
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <S.Wrapper as='section' id={id}>
      {children}
    </S.Wrapper>
  )
}
