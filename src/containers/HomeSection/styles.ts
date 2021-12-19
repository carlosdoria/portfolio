import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeSection = styled( motion.section )`
  height: 100vh;

  row-gap: 1rem;

  max-width: 1024px;
  width: calc(100% - 2rem);
  padding-top: var(--header-height);

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
`

export const HomeData = styled( motion.div )`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`

export const HomeTitleText = styled.h1`
  position: relative;

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
`

export const HomeTitleName = styled.span`
  text-shadow: 0 0 10px #00b3ff,
  0 0 20px #00b3ff,
  0 0 40px #00b3ff,
  0 0 10px #00b3ff
  ;

  animation:  animete 5s linear;

  @keyframes animete {
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
      color: var(--first-background-color);
      text-shadow: none;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 100% {
      color: #fff;
      text-shadow:
        0 0 10px #00b3ff,
        0 0 20px #00b3ff,
        0 0 40px #00b3ff,
        0 0 80px #00b3ff,
        0 0 10px #00b3ff
      ;
    }
  }

`

export const HomeContactLink = styled( motion.a )`
  position: relative;

  padding: .9rem 1.8rem;

  display: inline-block;

  font-size: 1.4rem;
  font-weight: var(--font-semi);
  letter-spacing: 3px;

  color: #fff;
  background-color: none;
  border-radius: .2rem;

  transition: .5s;
  overflow: hidden;

  :hover {
    /* color: #00b3ff; */
    box-shadow: 0 0 12px #00b3ff;

    transition-delay: .45s;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 12px;
    width: 12px;
    color: red;

    border-top: 2px solid var(--first-color);
    border-left: 2px solid var(--first-color);
    border-color: #00b3ff;

    transition: .5s;
    transition-delay: .4s;
  }

  :hover:before {
      height: 100%;
      width: 100%;
      transition-delay: 0s;
    }

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    height: 12px;
    width: 12px;

    border-bottom: 2px solid var(--first-color);
    border-right: 2px solid var(--first-color);
    border-color: #00b3ff;

    transition: .5s;
    transition-delay: .4s;
  }

  :hover:after {
      height: 100%;
      width: 100%;
      transition-delay: 0s;
    }

  @media screen and (max-width: 425px) and (max-height: 490px) {
    width: 60%;

    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.2rem;
  }
`

export const HomeDivSocialMedias = styled( motion.div )`
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
`

export const Icon = styled( motion.a )`
  width: max-content;

  margin-bottom: var(--mb-2);

  font-size: 2rem;
  color: var(--second-color);

  :hover {
    color: var(--first-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: var(--mb-4);
    font-size: 2.4rem;
  }
`

export const HomeDivImage = styled( motion.div )`
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
`

export const HomeImage = styled.img`
  border-radius: 19.3rem 7.5rem 9.3rem 5.6rem;
`
