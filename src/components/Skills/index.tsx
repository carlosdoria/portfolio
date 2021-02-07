import * as S from './styles'

interface ISkill {
  name: string;
  percentage: string;
  link: string;
}

const Skills = ( { name, percentage, link }: ISkill ) => {
  return (
    <S.Container>
      <S.DivName>
        <S.SkillIcon src={link} alt={`${name} logo`} />
        <S.SkillName>{name}</S.SkillName>
      </S.DivName>
      <div>
        <S.SkillPercentage>{percentage}</S.SkillPercentage>
      </div>
      <S.SkillBar percentage={percentage}></S.SkillBar>
    </S.Container>
  )
}

export default Skills
