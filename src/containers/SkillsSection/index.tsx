import React, { useState } from 'react'
import Skills from 'components/Skills'
import * as S from './styles'

interface ISkill {
  name: string;
  percentage: string;
  link: string;
}

const SkillsSection = () => {
  const [ skills, setSkills ] = useState<ISkill[]>( [
    {
      name: 'React',
      percentage: '70%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    },
    {
      name: 'HTML5',
      percentage: '85%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
    },
    {
      name: 'CSS',
      percentage: '80%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
    },
  ] )

  return (
    <S.SkillsSection id="skills">
      <S.SectionTitle>Minhas skills</S.SectionTitle>
      <S.SkillsContainer>
        <div>
          <S.SkillsSubtitle>Profissional Skills</S.SkillsSubtitle>
          <S.SkillsText>
            Atualmente focado em ReactJS e NodeJS.
          </S.SkillsText>
          {skills.map( ( skill, index ) => (
            <Skills
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              link={skill.link}
            />
          ) )}
        </div>
        <S.SkillImage
          src="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg"
          alt="imagem com dois computadores"
        />
      </S.SkillsContainer>
    </S.SkillsSection>
  )
}

export default SkillsSection
