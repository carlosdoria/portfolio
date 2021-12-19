import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'

import * as S from './styles'
import { Fade } from 'react-awesome-reveal'
// import CupCoffee from 'components/CupCoffee'

export default function HomeSectoion () {

  const WHILE_HOVER = {
    scale: [ 1, 1.6, 1.4 ], transition: { duration: .5 }
  }

  return (
    <Fade>
      <S.HomeSection id="home">
        <S.HomeData>
          <S.HomeTitleText>
              Olá, <br />
              Sou
            <S.HomeTitleName>  Carlos</S.HomeTitleName> <br />
              Desenvolvedor Full Stack
          </S.HomeTitleText>
          <div>
            <S.HomeContactLink
              href="#contact"
              initial={{ scale: .6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { delay: .3 } }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
            >
            Contato
            </S.HomeContactLink>
          </div>
        </S.HomeData>

        <S.HomeDivSocialMedias
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 320,
            damping: 80
          }}
        >
          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
            target="_blank"
          >
            <FaLinkedin />
          </S.Icon>
          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://github.com/carlosdoria"
            target="_blank"
          >
            <FaGithubAlt />
          </S.Icon>
          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://www.instagram.com/carlosc.doria/"
            target="_blank"
          >
            <FaInstagram />
          </S.Icon>
          <S.Icon
            whileHover={WHILE_HOVER}
            href="https://api.whatsapp.com/send?phone=5582988970954"
            target="_blank"
          >
            <FaWhatsapp />
          </S.Icon>
        </S.HomeDivSocialMedias>

        {/* <S.HomeDivImage> */}
        {/* <S.HomeImage
            src="https://github.com/carlosdoria.png"
            alt="foto de perfil"
          /> */}
        {/* <CupCoffee/> */}
        {/* </S.HomeDivImage> */}
      </S.HomeSection>
    </Fade>
  )
}
