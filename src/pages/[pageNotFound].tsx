import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { BB_8 } from '../components'

import * as S from 'styles/pageNotFound.styles'

const PageNotFound = () => {

  const router = useRouter()

  // useEffect( () => {
  //   setTimeout( () => {
  //     router.push( '/' )
  //   }, 3000 )
  // } )

  return (
    <>
      {/* <S.Title>Página não encontrada</S.Title>
      <S.Text>Você será redirecionado para página principal</S.Text> */}

      <BB_8 />
    </>
  )

}

export default PageNotFound
