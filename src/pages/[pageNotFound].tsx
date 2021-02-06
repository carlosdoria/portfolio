import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as S from "styles/pageNotFound.styles"

const PageNotFound = () => {

  const router = useRouter()

  useEffect(() => {

    setTimeout(
      () => {

        router.push('/')

      },
      2000
    )

  })

  return (
    <S.Container>
      <S.Title>Página não encontrada</S.Title>

      <S.Text>Você será redirecionado para página principal</S.Text>
    </S.Container>
  )

}

export default PageNotFound
