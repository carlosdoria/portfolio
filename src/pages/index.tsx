import { ContactSection, HomeSectoion, AboutMeSection } from '../containers'

import * as S from '../styles/home.styles'

const Home = () => {
  return (
    <S.Main>
      <HomeSectoion />
      <AboutMeSection />
      <ContactSection />
    </S.Main>
  )
}

export default Home
