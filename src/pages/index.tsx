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
        <S.Section id="home">
          <S.Data>
            <S.Title>
              Olá, <br />
              Sou
              <S.Name> Carlos</S.Name>
              <br />
              Desenvolvedor Front-End
            </S.Title>
            <S.ContactLink href="#">Contato</S.ContactLink>
          </S.Data>

          <S.DivSocialMedias>
            <S.Icon href="#">
              <FaLinkedin />
            </S.Icon>
            <S.Icon href="#">
              <FaGithubAlt />
            </S.Icon>
            <S.Icon href="#">
              <FaInstagram />
            </S.Icon>
          </S.DivSocialMedias>

          <S.DivImage>
            <S.Image
              src="https://github.com/carlosdoria.png"
              alt="foto de perfil"></S.Image>
          </S.DivImage>
        </S.Section>

        <S.Section id="about"></S.Section>
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
