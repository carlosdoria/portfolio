import { FaGithubAlt, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { GiCoffeeCup } from 'react-icons/gi'
// import CV from '../../../public/'

import * as S from './styles'

export default function HomeSectoion () {

  const ICONS_PROPS = {
    size: 35
  }

  const WHILE_HOVER = {
    scale: [ 1, 1.4, 1.2 ], transition: { duration: .5 }
  }

  return (
    <S.HomeSection id="home">
      <div>

        <S.PresentationWrapper>
          <p>Olá, sou</p>
          <h1>Carlos Dória</h1>
          <h2>Desenvolvedor FullStack</h2>
        </S.PresentationWrapper>

        {/* <S.ButtonWrapper>
        <a download=''>Baixar CV</a>
        <Link href='/'>Contate me</Link>
        <Link href='/'>Sobre mim</Link>
      </S.ButtonWrapper> */}

        <S.SocialWrapper>
          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin {...ICONS_PROPS} />
          </S.Icon>

          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://github.com/carlosdoria"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt {...ICONS_PROPS} />
          </S.Icon>

          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://www.instagram.com/carlosc.doria/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram {...ICONS_PROPS} />
          </S.Icon>

          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://api.whatsapp.com/send?phone=5582988970954"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp {...ICONS_PROPS} />
          </S.Icon>
        </S.SocialWrapper>
      </div>

      <S.OuthersWrapper>
        <GiCoffeeCup size={200}/>
      </S.OuthersWrapper>
    </S.HomeSection>
  )
}
