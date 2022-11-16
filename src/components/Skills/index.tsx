import * as S from './styles'
import { Slide } from 'react-awesome-reveal'

interface ISkill {
  name: string
  percentage: string
  link: string
}

export const Skills = ({ name, percentage, link }: ISkill) => {
  return (
    <Slide duration={1000}>
      <S.Container>
        <S.DivName>
          <S.SkillIcon src={link} alt={`${name} logo`} />
          <S.SkillName>{name}</S.SkillName>
        </S.DivName>
        <S.SkillPercentage>{percentage}</S.SkillPercentage>
        <S.SkillBar percentage={percentage}></S.SkillBar>
      </S.Container>
    </Slide>
  )
}
