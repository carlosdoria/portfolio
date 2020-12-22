import styled from 'styled-components';

export const Main = styled.main``;

// ===== SECTIONS =====

export const HomeSection = styled.section`
  height: calc(100vh - 3rem);
  max-width: 1024px;
  width: calc(100% - 2rem);
  row-gap: 1rem;

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
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
    top: 2rem;
    background-color: var(--first-color);
  }
`;

// ===== HOME =====

export const HomeData = styled.div`
  align-self: center;
`;

export const HomeTitle = styled.h1`
  margin-bottom: var(--mb-5);

  font-size: var(--big-font-size);
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
`;

export const HomeDivSocialMedias = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.a`
  width: max-content;

  margin-bottom: var(--mb-2);

  font-size: 1.5rem;
  color: var(--second-color);

  :hover {
    color: var(--first-color);
  }
`;

export const HomeDivImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 70%;
`;

export const HomeImage = styled.img`
  border-radius: 9.3rem 7.5rem 9.3rem 5.6rem;
`;

// ===== ABOUT =====

export const AboutContainer = styled.div`
  row-gap: 2rem;
  text-align: center;

  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
`;

export const AboutDivImage = styled.div`
  justify-self: center;
`;

export const AboutImage = styled.img`
  width: 200px;
  border-radius: 0.5rem;
`;

// export const AboutDivText = styled.div``;

export const AboutSubtitle = styled.h2`
  margin-bottom: var(--mb-2);
`;

export const AboutText = styled.p`
  text-indent: 3rem;
  text-align: justify;
`;

// ===== SKILLS =====

export const SkillsContainer = styled.div`
  row-gap: 2rem;
  text-align: center;

  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
`;

export const SkillsSubtitle = styled.h2`
  margin-bottom: var(--mb-2);
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

export const WorksContainer = styled.div`
  row-gap: 2rem;

  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
`;

// ===== CONTACT =====

export const ContactContainer = styled.div`
  /* row-gap: 2rem;
  justify-items: center; */

  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
`;

export const Form = styled.form``;

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
