import React, { useRef } from 'react';
import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

import * as S from './styles';

const HomeSectoion = () => {
  const homeTitle = useRef(null);

  return (
    <S.HomeSection id="home">
      <S.HomeData>
        <S.HomeTitle className="oi" ref={homeTitle}>
          Olá, <br />
          Sou
          <S.HomeTitleName> Carlos</S.HomeTitleName>
          <br />
          Desenvolvedor Full Stack
        </S.HomeTitle>
        <div>
          <S.HomeContactLink href="#contact">Contato</S.HomeContactLink>
        </div>
      </S.HomeData>

      <S.HomeDivSocialMedias>
        <S.Icon
          href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
          target="_blank">
          <FaLinkedin />
        </S.Icon>
        <S.Icon href="https://github.com/carlosdoria" target="_blank">
          <FaGithubAlt />
        </S.Icon>
        <S.Icon href="https://www.instagram.com/carlosc.doria/" target="_blank">
          <FaInstagram />
        </S.Icon>
        <S.Icon
          href="https://api.whatsapp.com/send?phone=5582988970954"
          target="_blank">
          <FaWhatsapp />
        </S.Icon>
      </S.HomeDivSocialMedias>

      <S.HomeDivImage>
        <S.HomeImage
          src="https://github.com/carlosdoria.png"
          alt="foto de perfil"
        />
      </S.HomeDivImage>
    </S.HomeSection>
  );
};

export default HomeSectoion;
