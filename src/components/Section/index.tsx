import React, { ReactElement } from 'react'

import * as S from './styles'

interface SectionProps {
  title: string
  children: ReactElement
}

export const Section = ( { title, children }: SectionProps ) => {
  return (
    <>
      <S.Title>{title}</S.Title>

      <S.Wrapper>
        {children}
      </S.Wrapper>
    </>
  )
}
