import { Section, SectionTitle } from 'components'

import * as S from './styles'

interface ProjectProps {
  data: {
    title: string
    description: string
    imageUrl: string
    githubUrl: string
    demoUrl: string
    technologies: string[]
  }
}

export const Project = ({ data }: ProjectProps) => {
  return (
    <S.Project>
      <img key={data.title} src={data.imageUrl} alt={data.title} />
      <S.Content>
        <h4>{data.title}</h4>
        <p>{data.description}</p>

        <S.Footer>
          <a href={data.githubUrl} target='_blank' rel='noopener noreferrer'>
            Github
          </a>
          <a href={data.demoUrl} target='_blank' rel='noopener noreferrer'>
            Demonstração
          </a>
        </S.Footer>
      </S.Content>
    </S.Project>
  )
}
