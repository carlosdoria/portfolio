import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SectionTitle = styled( motion.h2 )`
  position: relative;
  color: ${props => props.theme.colors.primary};
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
    background-color: ${props => props.theme.colors.primary};
  }
  @media screen and (min-width: 600px) {
    margin-bottom: var(--mb-6);

    :after {
      width: 100px;
      top: 3.2rem;
    }
  }
`

export const AboutSection = styled( motion.section )`
  min-height: 100vh;
`

export const AboutContainer = styled( motion.div )`
  max-width: 1024px;
  width: calc(100% - 2rem);

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  row-gap: 2rem;

  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    text-align: initial;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const AboutDivImage = styled.div`
  justify-self: center;
`

export const AboutImage = styled.img`
  width: 200px;

  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

// export const AboutDivText = styled.div``;

export const AboutSubtitle = styled.h2`
  margin-bottom: var(--mb-2);

  text-align: center;
`

export const AboutText = styled.p`
  text-indent: 3rem;
  text-align: justify;
  line-height: 1.6rem;
`
