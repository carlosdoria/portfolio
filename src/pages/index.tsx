import React from 'react';
import { FaLinkedin, FaGithubAlt, FaInstagram } from 'react-icons/fa';

// import Prismic from 'prismic-javascript';
// import { Client } from '../../prismic-configuration';

// import { githubInfos, prismicInfos, IUser } from './api/interfaces';
// import ApiGithub from '../services/api';

import Navbar from '../components/Navbar';

import * as S from '../styles/homeStyles';

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <S.Main>
        <S.HomeSection id="home">
          <S.HomeData>
            <S.HomeTitle>
              Olá, <br />
              Sou
              <S.HomeTitleName> Carlos</S.HomeTitleName>
              <br />
              Desenvolvedor Front-End
            </S.HomeTitle>
            <S.HomeContactLink href="#">Contato</S.HomeContactLink>
          </S.HomeData>

          <S.HomeDivSocialMedias>
            <S.Icon href="#">
              <FaLinkedin />
            </S.Icon>
            <S.Icon href="#">
              <FaGithubAlt />
            </S.Icon>
            <S.Icon href="#">
              <FaInstagram />
            </S.Icon>
          </S.HomeDivSocialMedias>

          <S.HomeDivImage>
            <S.HomeImage
              src="https://github.com/carlosdoria.png"
              alt="foto de perfil"
            />
          </S.HomeDivImage>
        </S.HomeSection>

        <S.AboutSections id="about">
          <S.SectionTitle>Sobre mim</S.SectionTitle>
          <S.AboutContainer>
            <S.AboutDivImage>
              <S.AboutImage
                src="https://github.com/carlosdoria.png"
                alt="foto de perfil"
              />
            </S.AboutDivImage>

            <div>
              <S.AboutSubtitle>Sou Carlos</S.AboutSubtitle>
              <S.AboutText>
                Desenvolvedor Front-end Júnior e Advogado, focado em desenvolver
                aplicações web com JavaScript e React.
                <br />
                Em 2018 me tornei bacharel em Direito formado pelo Centro
                Universitário CESMAC, posteriormente iniciei minha carreira na
                advocacia, atuando como advogado previdenciarista, durante minha
                jornada desenvolvi diversas planilhas de cálculos em Excel, onde
                aprendi sobre funções e macros.
                <br />
                No decorrer do desenvolvimentos das planilhas conheci o VBA -
                Visual Basic for Applications, que foi meu primeiro contato com
                uma linguagem de programação e nesse momento vi o imenso
                universo por trás da programação e assim percebi o prazer que
                tinha em desenvolver e solucionar problemas durante o
                desenvolvimento de aplicações.
                <br />
                Por volta do segundo semestre deste ano tomei uma das decisões
                mais difíceis, que foi realizar minha transição de carreira,
                deixando a advocacia de lado para focar todo o meu tempo no
                estudo e desenvolvimento de aplicações web, com foco em HTML,
                CSS, JavaScritp e React. Desde então, venho me desafiando cada
                vez mais a aprender coisas novas e me aperfeiçoar como
                desenvolvedor.
              </S.AboutText>
            </div>
          </S.AboutContainer>
        </S.AboutSections>
      </S.Main>
    </React.Fragment>
  );
}

// export const getServerSideProps = async () => {
//   const responseGithub = await ApiGithub.get('');
//   const userGithubInfos = responseGithub.data;
//   // console.log(userGithubInfos);

//   const responsePrismic = await Client.query(
//     Prismic.Predicates.at('document.type', 'centrallinks'),
//   );
//   const userPrismicInfos = responsePrismic.results[0].data.body;
//   const titlePage = responsePrismic.results[0].data.title_page;
//   // console.log(userPrismicInfos);

//   return {
//     props: {
//       githubInfos: userGithubInfos,
//       prismicInfos: userPrismicInfos,
//       titlePage: titlePage,
//     },
//   };
// };
