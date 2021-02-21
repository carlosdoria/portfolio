import * as S from './styles'

interface ILinkImage {
  imageLink: string;
  imageDescription: string;
}

interface IWorks {
  imageLink: string;
  imageDescription: string;
}

const Works = ( { works } ) => {
  return (
    <S.WorksContainer>
      {works.map( ( work: IWorks, index: number ) => (
        <S.Container
          key={index}
        >
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.Span></S.Span>
          <S.WorkImage src={work.imageLink} alt={work.imageDescription} />
        </S.Container>
      ) )}
    </S.WorksContainer>
  )
}

export default Works
