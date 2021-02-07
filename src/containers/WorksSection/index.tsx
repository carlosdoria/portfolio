import React, { useState } from 'react'
import Works from 'components/Works'
import * as S from './styles'

interface IWorks {
  imageLink: string;
  imageDescription: string;
}

const WorksSection = () => {
  const [ works, setWorks ] = useState<IWorks[]>( [
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
  ] )

  return (
    <S.WorksSection id="works">
      <S.SectionTitle>Trabalhos</S.SectionTitle>
      <S.WorksContainer>
        {works.map( ( work, index ) => (
          <Works
            key={index}
            imageLink={work.imageLink}
            imageDescription={work.imageDescription}
          />
        ) )}
      </S.WorksContainer>
    </S.WorksSection>
  )
}

export default WorksSection
