import React from 'react'
import * as S from './styles'
import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'

export const Footer = () => {
  const YEAR = new Date()

  return (
    <S.Footer>
      {/* <S.FooterTitle>Carlos</S.FooterTitle> */}
      <S.FooterSocialMedias>
        <S.Icon
          href='https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/'
          target='_blank'
        >
          <FaLinkedin />
        </S.Icon>

        <S.Icon href='https://github.com/carlosdoria' target='_blank'>
          <FaGithubAlt />
        </S.Icon>

        <S.Icon href='https://www.instagram.com/carlosc.doria/' target='_blank'>
          <FaInstagram />
        </S.Icon>

        <S.Icon
          href='https://api.whatsapp.com/send?phone=5582988970954'
          target='_blank'
        >
          <FaWhatsapp />
        </S.Icon>
      </S.FooterSocialMedias>

      <S.CopyRightText>
        Carlos Dória {'\u00A9'} {YEAR.getFullYear()}
      </S.CopyRightText>
    </S.Footer>
  )
}
