'use client'

import { useEffect } from 'react'

import * as S from 'styles/pageNotFound.styles'

const PageNotFound = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/')
  //   }, 2000)
  // })

  return (
    <S.Container>
      <S.Title>Página não encontrada</S.Title>
      <S.Text>Você será redirecionado para página principal</S.Text>
    </S.Container>
  )
}

export default PageNotFound
