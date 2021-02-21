import React, { useRef } from 'react'
import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'

import * as S from './styles'
import { Fade } from 'react-awesome-reveal'

const HomeSectoion = () => {
  const homeTitle = useRef( null )

  const WHILE_HOVER = {
    scale: [ 1, 1.6, 1.4 ], transition: { duration: .5 }
  }

  return (
    <Fade>
      <S.HomeSection id="home">
        <S.HomeData>
          <S.HomeTitle ref={homeTitle}>
          Olá, <br />
          Sou{' '}
            <S.HomeName>Carlos</S.HomeName>
            <br />
          Desenvolvedor Full Stack
          </S.HomeTitle>
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

        <S.HomeDivImage
        >
          {/* <S.HomeImage
            src="https://github.com/carlosdoria.png"
            alt="foto de perfil"
          /> */}
          <S.Container>
            <S.Plate></S.Plate>
            <S.Cup>
              <S.Top>
                <S.Vapour>
                  <S.Span n={1}></S.Span>
                  <S.Span n={3}></S.Span>
                  <S.Span n={16}></S.Span>
                  <S.Span n={5}></S.Span>
                  <S.Span n={13}></S.Span>
                  <S.Span n={20}></S.Span>
                  <S.Span n={6}></S.Span>
                  <S.Span n={7}></S.Span>
                  <S.Span n={10}></S.Span>
                  <S.Span n={8}></S.Span>
                  <S.Span n={17}></S.Span>
                  <S.Span n={11}></S.Span>
                  <S.Span n={12}></S.Span>
                  <S.Span n={14}></S.Span>
                  <S.Span n={2}></S.Span>
                  <S.Span n={9}></S.Span>
                  <S.Span n={15}></S.Span>
                  <S.Span n={4}></S.Span>
                  <S.Span n={19}></S.Span>
                </S.Vapour>
                <S.Circle>
                  <S.Tea />
                </S.Circle>
              </S.Top>
              <S.Handle></S.Handle>
            </S.Cup>
          </S.Container>
        </S.HomeDivImage>
      </S.HomeSection>
    </Fade>
  )
}

export default HomeSectoion
