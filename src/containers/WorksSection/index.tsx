import Works from 'containers/WorksSection/Works'
import * as S from './styles'
import { Fade } from 'react-awesome-reveal'

export default function WorksSection () {

  return (
    <S.WorksSection id="works">
      <Fade>
        <S.SectionTitle>Trabalhos</S.SectionTitle>
        <Works />
      </Fade>
    </S.WorksSection>
  )
}
