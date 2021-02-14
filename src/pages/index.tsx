import {
  HomeSectoion,
  AboutSection,
  SkillsSection,
  WorksSection,
  ContactSection,
} from '../containers'

import { Navbar, Footer } from '../components'

import * as S from '../styles/home.styles'
import { Zoom, Fade } from 'react-awesome-reveal'

// import Prismic from 'prismic-javascript';
// import { Client } from '../../prismic-configuration';

// import { githubInfos, prismicInfos, IUser } from './api/interfaces';
// import ApiGithub from '../services/api';

const Home = () => {
  return (
    <>
      <Navbar/>

      <S.Main>
        {/* === SECTION HOME === */}
        <Fade>
          <HomeSectoion />
        </Fade>

        {/* === SECTION ABOUT === */}
        <Fade>
          <AboutSection />
        </Fade>

        {/* === SECTION SKILLS === */}
        <Fade>
          <SkillsSection />
        </Fade>

        {/* === SECTION WORKS === */}
        <Fade>
          <WorksSection />
        </Fade>

        {/* === SECTION CONTACT === */}
        <Fade>
          <ContactSection />
        </Fade>

        {/* === SECTION FOOTER === */}
        <Footer />
      </S.Main>
    </>
  )
}

export default Home

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
