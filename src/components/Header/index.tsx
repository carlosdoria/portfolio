'use client'

import Link from 'next/link'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <Link href='#home'>
          <S.Logo>Carlos Dória</S.Logo>
        </Link>
      </S.Nav>
    </S.Header>
  )
}
