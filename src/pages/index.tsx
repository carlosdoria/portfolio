import {
  ContactSection,
  HomeSectoion,
} from '../containers'

import * as S from '../styles/home.styles'

const Home = () => {
  return (
    <S.Main>
      <HomeSectoion />
      <ContactSection />
    </S.Main>
  )
}

export default Home

