import React, { useState } from 'react';
import { FaLinkedin, FaGithubAlt, FaInstagram } from 'react-icons/fa';

import Skills from 'components/Skills';
import Works from 'components/Works';

// import Prismic from 'prismic-javascript';
// import { Client } from '../../prismic-configuration';

// import { githubInfos, prismicInfos, IUser } from './api/interfaces';
// import ApiGithub from '../services/api';

import Navbar from '../components/Navbar';

import * as S from '../styles/home.styles';

interface ISkill {
  name: string;
  percentage: string;
  link: string;
}

interface IWorks {
  imageLink: string;
  imageDescription: string;
}

export default function Home() {
  const YEAR = new Date();

  const [skills, setSkills] = useState<ISkill[]>([
    {
      name: 'JavaScript',
      percentage: '90%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
    },
    {
      name: 'HTML5',
      percentage: '95%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
    },
    {
      name: 'CSS',
      percentage: '80%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
    },
    {
      name: 'React',
      percentage: '70%',
      link:
        'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    },
  ]);

  const [works, setWorks] = useState<IWorks[]>([
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
    {
      imageLink:
        'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
      imageDescription: 'imagem com dois computadores',
    },
  ]);

  return (
    <React.Fragment>
      <Navbar />
      <S.Main>
        {/* === SECTION HOME === */}
        <S.HomeSection id="home">
          <S.HomeData>
            <S.HomeTitle>
              Olá, <br />
              Sou
              <S.HomeTitleName> Carlos</S.HomeTitleName>
              <br />
              Desenvolvedor Front-End
            </S.HomeTitle>
            <div>
              <S.HomeContactLink href="#">Contato</S.HomeContactLink>
            </div>
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

        {/* === SECTION ABOUT === */}
        <S.AboutSection id="about">
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
                aplicações web com JavaScript e React.{' '}
              </S.AboutText>
              <S.AboutText>
                Em 2018 me tornei bacharel em Direito formado pelo Centro
                Universitário CESMAC, posteriormente iniciei minha carreira na
                advocacia, atuando como advogado previdenciarista, durante minha
                jornada desenvolvi diversas planilhas de cálculos em Excel, onde
                aprendi sobre funções e macros.{' '}
              </S.AboutText>
              <S.AboutText>
                No decorrer do desenvolvimentos das planilhas conheci o VBA -
                Visual Basic for Applications, que foi meu primeiro contato com
                uma linguagem de programação e nesse momento vi o imenso
                universo por trás da programação e assim percebi o prazer que
                tinha em desenvolver e solucionar problemas durante o
                desenvolvimento de aplicações.{' '}
              </S.AboutText>
              <S.AboutText>
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
        </S.AboutSection>

        {/* === SECTION SKILLS === */}
        <S.SkillsSection id="skills">
          <S.SectionTitle>Minhas skills</S.SectionTitle>
          <S.SkillsContainer>
            <div>
              <S.SkillsSubtitle>Profissional Skills</S.SkillsSubtitle>
              <S.SkillsText>
                Por volta do segundo semestre deste ano tomei uma das decisões
                mais difíceis, que foi realizar minha transição de carreira,
                deixando a advocacia de lado para focar todo o meu tempo no
                estudo e desenvolvimento de aplicações web, com foco em HTML,
                CSS, JavaScritp e React. Desde então, venho me desafiando cada
                vez mais a aprender coisas novas e me aperfeiçoar como
                desenvolvedor.
              </S.SkillsText>
              {skills.map((skill, index) => (
                <Skills
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  link={skill.link}
                />
              ))}
            </div>
            <S.SkillImage
              src="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg"
              alt="imagem com dois computadores"
            />
          </S.SkillsContainer>
        </S.SkillsSection>

        {/* === SECTION WORKS === */}
        <S.WorksSection id="works">
          <S.SectionTitle>Trabalhos</S.SectionTitle>
          <S.WorksContainer>
            {works.map((work, index) => (
              <Works
                key={index}
                imageLink={work.imageLink}
                imageDescription={work.imageDescription}
              />
            ))}
          </S.WorksContainer>
        </S.WorksSection>

        {/* === SECTION CONTACT === */}
        <S.ContactSection id="contact">
          <S.SectionTitle>Contato</S.SectionTitle>
          <S.ContactContainer>
            <S.Form>
              <S.InputText type="text" placeholder="Nome" />
              <S.InputEmail type="email" placeholder="Email" />
              <S.TextArea cols={0} rows={10}></S.TextArea>
              <S.InputButton type="button" value="Enviar" />
            </S.Form>
          </S.ContactContainer>
        </S.ContactSection>

        {/* === SECTION FOOTER === */}
        <S.Footer>
          <S.FooterTitle>Carlos</S.FooterTitle>
          <S.FooterSocialMedias>
            <S.FooterIcon href="#">
              <FaLinkedin />
            </S.FooterIcon>
            <S.FooterIcon href="#">
              <FaGithubAlt />
            </S.FooterIcon>
            <S.FooterIcon href="#">
              <FaInstagram />
            </S.FooterIcon>
          </S.FooterSocialMedias>
          {'\u00A9'} {YEAR.getFullYear()}, copyright all rights reserved
        </S.Footer>
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
