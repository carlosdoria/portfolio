'use client'

import { Section } from 'components'
import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'
import { GiCoffeeCup } from 'react-icons/gi'

import * as S from './styles'

export const HomeSection = () => {
  const ICONS_PROPS = {
    size: 35
  }

  return (
    <Section id='home'>
      <S.Content>
        <div>
          <S.PresentationWrapper>
            <S.Text>Seja bem vindo, sou</S.Text>
            <S.Title>Carlos Dória</S.Title>
            <S.Subtitle>Desenvolvedor FullStack</S.Subtitle>
          </S.PresentationWrapper>

          <S.SocialWrapper>
            <S.Icon
              href='https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin {...ICONS_PROPS} />
            </S.Icon>

            <S.Icon
              href='https://github.com/carlosdoria'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubAlt {...ICONS_PROPS} />
            </S.Icon>

            <S.Icon
              href='https://www.instagram.com/carlosc.doria/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram {...ICONS_PROPS} />
            </S.Icon>

            <S.Icon
              href='https://api.whatsapp.com/send?phone=5582988970954'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsapp {...ICONS_PROPS} />
            </S.Icon>
          </S.SocialWrapper>
        </div>

        <S.OuthersWrapper>
          <GiCoffeeCup size={200} />
        </S.OuthersWrapper>
      </S.Content>
    </Section>
  )
}
