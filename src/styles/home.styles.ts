import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Main = styled.main``;

// ===== SECTIONS =====

export const HomeSection = styled.section`
  height: 100vh;

  row-gap: 1rem;

  max-width: 1024px;
  width: calc(100% - 2rem);

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AboutSection = styled.section`
  min-height: 100vh;
`;

export const SkillsSection = styled.section`
  min-height: 100vh;
`;

export const WorksSection = styled.section`
  min-height: 100vh;
`;

export const ContactSection = styled.section`
  min-height: 100vh;
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-3);
  margin-bottom: var(--mb-4);
  text-align: center;

  :after {
    position: absolute;
    content: '';
    width: 64px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.4rem;
    background-color: var(--first-color);
  }
  @media screen and (min-width: 600px) {
    margin-bottom: var(--mb-6);

    :after {
      width: 100px;
      top: 3.2rem;
    }
  }
`;

// ===== HOME =====

export const HomeData = styled.div`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const HomeTitle = styled.h1`
  margin-top: var(--header-height);
  margin-bottom: var(--mb-5);

  font-size: var(--large-font-size);

  @media screen and (min-width: 520px) {
    width: 50%;
  }

  @media screen and (min-width: 1020px) and (min-height: 500px) {
    margin-top: 0;

    width: 100%;
  }

  @media screen and (min-width: 925px) and (min-height: 875px) {
    width: 100%;
  }
`;

export const HomeTitleName = styled.span`
  color: var(--first-color);
`;

export const HomeContactLink = styled.a`
  padding: 0.75rem 2.5rem;

  display: inline-block;

  color: #fff;
  font-weight: var(--font-semi);
  background-color: var(--first-color);
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  }

  @media screen and (max-width: 425px) and (max-height: 490px) {
    width: 60%;

    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const HomeDivSocialMedias = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) and (max-height: 490px) {
    width: 60%;

    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
`;

export const Icon = styled.a`
  width: max-content;

  margin-bottom: var(--mb-2);

  font-size: 1.5rem;
  color: var(--second-color);

  :hover {
    color: var(--first-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: var(--mb-4);
    font-size: 2rem;
  }
`;

export const HomeDivImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 60%;

  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 425px) and (max-height: 490px) {
    visibility: hidden;
  }

  @media screen and (min-height: 575px) {
    width: 70%;
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (min-height: 650px) {
    bottom: 7%;

    max-width: 420px;
  }

  @media screen and (min-width: 1045px) and (min-height: 800px) {
    max-width: none;
  }
`;

export const HomeImage = styled.img`
  border-radius: 19.3rem 7.5rem 9.3rem 5.6rem;
`;

// ===== ABOUT =====

export const AboutContainer = styled(SectionContainer)`
  row-gap: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    text-align: initial;
  }
`;

export const AboutDivImage = styled.div`
  justify-self: center;
`;

export const AboutImage = styled.img`
  width: 200px;

  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

// export const AboutDivText = styled.div``;

export const AboutSubtitle = styled.h2`
  margin-bottom: var(--mb-2);

  text-align: center;
`;

export const AboutText = styled.p`
  text-indent: 3rem;
  text-align: justify;
`;

// ===== SKILLS =====

export const SkillsContainer = styled(SectionContainer)`
  row-gap: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    text-align: initial;
  }
`;

export const SkillsSubtitle = styled.h2`
  margin-bottom: var(--mb-2);

  text-align: center;
`;

export const SkillsText = styled.p`
  margin-bottom: var(--mb-2);

  text-indent: 3rem;
  text-align: justify;
`;

export const SkillImage = styled.img`
  border-radius: 0.5rem;
`;

// ===== WORKS =====

export const WorksContainer = styled(SectionContainer)`
  row-gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

// ===== CONTACT =====

export const ContactContainer = styled(SectionContainer)`
  /* row-gap: 2rem;
  justify-items: center; */
  @media screen and (min-width: 768px) {
    justify-items: center;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    width: 560px;
  }
`;

export const InputText = styled.input`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const InputEmail = styled.input`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const InputButton = styled.input`
  margin-left: auto;

  padding: 0.75rem 2.5rem;

  display: block;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  color: #fff;
  background-color: var(--first-color);

  border: none;
  border-radius: 0.5rem;
  outline: none;

  cursor: pointer;

  :hover {
    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  }
`;

// ===== Footer =====

export const Footer = styled.footer`
  padding: 2rem 0;

  text-align: center;

  font-weight: var(--font-semi);

  color: #fff;
  background-color: var(--second-color);
`;

export const FooterTitle = styled.p`
  margin-bottom: var(--mb-4);

  font-size: 2rem;
`;

export const FooterSocialMedias = styled.div`
  margin-bottom: var(--mb-4);
`;

export const FooterIcon = styled.a`
  margin: 0 var(--mb-2);

  font-size: 1.5rem;

  color: #fff;
`;
