'use client'

import {
  HomeSectoion,
  AboutMeSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from '../containers'

import * as S from '../styles/home.styles'

const Home = () => {
  return (
    <S.Main>
      <HomeSectoion />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </S.Main>
  )
}

export default Home
