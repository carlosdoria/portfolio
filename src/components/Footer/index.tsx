import React from 'react';
import * as S from './styles';
import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const YEAR = new Date();

  return (
    <S.Footer>
      {/* <S.FooterTitle>Carlos</S.FooterTitle> */}
      <S.FooterSocialMedias>
        <S.FooterIcon
          href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
          target="_blank">
          <FaLinkedin />
        </S.FooterIcon>
        <S.FooterIcon href="https://github.com/carlosdoria" target="_blank">
          <FaGithubAlt />
        </S.FooterIcon>
        <S.FooterIcon
          href="https://www.instagram.com/carlosc.doria/"
          target="_blank">
          <FaInstagram />
        </S.FooterIcon>
        <S.FooterIcon
          href="https://api.whatsapp.com/send?phone=5582988970954"
          target="_blank">
          <FaWhatsapp />
        </S.FooterIcon>
      </S.FooterSocialMedias>
      {'\u00A9'} {YEAR.getFullYear()}, copyright all rights reserved
    </S.Footer>
  );
};

export default Footer;
