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

  const WHILE_HOVER = {
    scale: [1, 1.4, 1.2],
    transition: { duration: 0.5 }
  }

  return (
    <S.Footer>
      {/* <S.FooterTitle>Carlos</S.FooterTitle> */}
      <S.FooterSocialMedias>
        <S.Icon
          href='https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/'
          target='_blank'
          whileHover={WHILE_HOVER}
        >
          <FaLinkedin />
        </S.Icon>
        <S.Icon
          href='https://github.com/carlosdoria'
          target='_blank'
          whileHover={WHILE_HOVER}
        >
          <FaGithubAlt />
        </S.Icon>
        <S.Icon
          href='https://www.instagram.com/carlosc.doria/'
          target='_blank'
          whileHover={WHILE_HOVER}
        >
          <FaInstagram />
        </S.Icon>
        <S.Icon
          href='https://api.whatsapp.com/send?phone=5582988970954'
          target='_blank'
          whileHover={WHILE_HOVER}
        >
          <FaWhatsapp />
        </S.Icon>
      </S.FooterSocialMedias>

      <p>
        {'\u00A9'} {YEAR.getFullYear()}, copyright all rights reserved
      </p>
    </S.Footer>
  )
}
