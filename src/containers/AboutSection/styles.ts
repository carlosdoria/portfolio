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

export const AboutSection = styled.section`
  min-height: 100vh;
`;

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
