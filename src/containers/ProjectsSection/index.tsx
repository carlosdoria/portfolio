'use client'

import { Project } from 'components/Project'

import * as S from './styles'
import { Section } from 'components/Section'
import { SectionTitle } from 'components/SectionTitle'

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Social Links',
      description: 'Gerenciados de links digitais',
      imageUrl: 'social-links.png',
      githubUrl: 'https://github.com/carlosdoria/social-links',
      demoUrl: 'https://carlosdoria-social-links.vercel.app/',
      technologies: []
    },
    {
      title: 'Digital Menu',
      description: 'Cardápio digital',
      imageUrl: 'digital-menu.png',
      githubUrl: 'https://github.com/carlosdoria/digital-menu',
      demoUrl: 'https://digital-menu-cd.vercel.app/',
      technologies: []
    },
    {
      title: 'Crypto Wallet',
      description: 'Carteira de cripto moedas',
      imageUrl: 'cryptocurrency-wallet.png',
      githubUrl: 'https://github.com/carlosdoria/cryptocurrency-wallet',
      demoUrl: 'https://cryptocurrency-wallet.vercel.app',
      technologies: []
    }
  ]

  return (
    <Section id='projects'>
      <SectionTitle title='Projetos' />

      <S.Content>
        {projects.map((project) => (
          <Project key={project.title} data={project} />
        ))}
      </S.Content>
    </Section>
  )
}
