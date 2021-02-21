import React, { useState } from 'react'
import Works from 'containers/WorksSection/Works'
import * as S from './styles'
import { Fade } from 'react-awesome-reveal'

interface IWorks {
  imageLink: string;
  imageDescription: string;
}

const WorksSection = () => {

  const [ works, ] = useState<IWorks[]>( [
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
      <Fade>
        <S.SectionTitle>Trabalhos</S.SectionTitle>
        <Works
          works={works}
        />
      </Fade>
    </S.WorksSection>
  )
}

export default WorksSection
