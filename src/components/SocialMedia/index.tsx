'use client'

import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'

import * as S from './styles'

export const Header = () => {
  const ICONS_PROPS = {
    size: 35
  }

  return (
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
  )
}
