import { FaGithubAlt, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { GiCoffeeCup } from 'react-icons/gi'
// import CV from '../../../public/'

import * as S from './styles'

export default function HomeSectoion () {

  const ICONS_PROPS = {
    size: 35
  }

  return (
    <S.HomeSection id="home">
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
        <a
          href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin {...ICONS_PROPS} />
        </a>

        <a
          href="https://github.com/carlosdoria"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt {...ICONS_PROPS} />
        </a>

        <a
          href="https://www.instagram.com/carlosc.doria/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram {...ICONS_PROPS} />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5582988970954"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp {...ICONS_PROPS} />
        </a>
      </S.SocialWrapper>

      <S.OuthersWrapper>
        {/* <S.SocialWrapper>
          <Link
            href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
            // target="_blank"
          >
            <a>
              <FaLinkedin {...ICONS_PROPS} />
            </a>
          </Link>
          <Link
            href="https://github.com/carlosdoria"
            // target="_blank"
          >
            <a>
              <FaGithubAlt {...ICONS_PROPS} />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/carlosc.doria/"
            // target="_blank"
          >
            <a>
              <FaInstagram {...ICONS_PROPS} />
            </a>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5582988970954"
            // target="_blank"
          >
            <a>
              <FaWhatsapp {...ICONS_PROPS} />
            </a>
          </Link>
        </S.SocialWrapper> */}
        {/* <CupCoffee /> */}
        <GiCoffeeCup size={200}/>
        {/* <div>a</div> */}
      </S.OuthersWrapper>
    </S.HomeSection>
  )
}
