import React from 'react'
import * as S from './styles'

interface SectionProps {
  id: string
  children: React.ReactNode
}

export const Section = ({ id, children }: SectionProps) => {
  return <S.Wrapper id={id}>{children}</S.Wrapper>
}
