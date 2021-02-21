import {
  HomeSectoion,
  AboutSection,
  SkillsSection,
  WorksSection,
  ContactSection,
} from '../containers'

import { Navbar, Footer } from '../components'

import * as S from '../styles/home.styles'

// import Prismic from 'prismic-javascript';
// import { Client } from '../../prismic-configuration';

// import { githubInfos, prismicInfos, IUser } from './api/interfaces';
// import ApiGithub from '../services/api';

const Home = () => {
  return (
    <div style={{ background: '#000' }}>
      <Navbar/>

      <S.Main>
        {/* === SECTION HOME === */}
        <HomeSectoion />

        {/* === SECTION ABOUT === */}
        <AboutSection />

        {/* === SECTION SKILLS === */}
        <SkillsSection />

        {/* === SECTION WORKS === */}
        <WorksSection />

        {/* === SECTION CONTACT === */}
        <ContactSection />

        {/* === SECTION FOOTER === */}
        <Footer />
      </S.Main>
    </div>
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
