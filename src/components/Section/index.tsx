import React from 'react'
import { Fade } from 'react-awesome-reveal'

import * as S from './styles'

interface SectionProps {
  id: string
  children: React.ReactNode
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <S.Wrapper id={id}>
      <Fade>{children}</Fade>
    </S.Wrapper>
  )
}
