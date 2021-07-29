import React, { useState } from 'react'
import * as S from './styles'

interface IWorks {
  imageLink: string;
  imageDescription: string;
}

const Works = () => {

  const [ works, ] = useState<IWorks[]>([
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
  ])

  return (
    <S.WorksContainer>
      {works.map((work, index) => (
        <S.Container
          key={index}
        >
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.WorkImage src={work.imageLink} alt={work.imageDescription} />
        </S.Container>
      ))}
    </S.WorksContainer>
  )
}

export default Works
