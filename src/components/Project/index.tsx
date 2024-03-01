import { FiExternalLink } from 'react-icons/fi'

import * as S from './styles'
import Image from 'next/image'

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
      <Image
        key={data.title}
        src={`/img/${data.imageUrl}`}
        alt={data.title}
        width={300}
        height={200}
      />
      <S.Content>
        <S.Title>{data.title}</S.Title>
        <S.Subtitle>{data.description}</S.Subtitle>

        <S.Footer>
          <a href={data.githubUrl} target='_blank' rel='noopener noreferrer'>
            Github
            <FiExternalLink />
          </a>

          <a href={data.demoUrl} target='_blank' rel='noopener noreferrer'>
            Demonstração
            <FiExternalLink />
          </a>
        </S.Footer>
      </S.Content>
    </S.Project>
  )
}
