import {
  ContactSection,
  HomeSectoion,
  AboutMeSection,
  SkillsSection
} from '../containers'

import * as S from '../styles/home.styles'

const Home = () => {
  return (
    <S.Main>
      <HomeSectoion />
      <AboutMeSection />
      <SkillsSection />
      <ContactSection />
    </S.Main>
  )
}

export default Home
