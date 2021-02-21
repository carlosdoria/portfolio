import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeSection = styled( motion.section )`
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
`

export const HomeData = styled( motion.div )`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`

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
`

export const HomeName = styled.span`
  color: var(--first-color);
`

export const HomeContactLink = styled( motion.a )`
  padding: 0.75rem 2.5rem;

  display: inline-block;

  font-size: 1.4rem;
  font-weight: var(--font-semi);

  color: #fff;
  background-color: var(--first-color);

  border-radius: 0.5rem;

  transition: .5s;

  :hover {
    color: var(--first-color);
    background-color: #fff;

    border: 1px solid var(--first-color);

    box-shadow: 10px 10px 40px rgba(1, 0, 0, 0.4);
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

export const Container = styled.div`
  position: relative;
  top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cup = styled.div`
  position: relative;
  height: 300px;
  width: 280px;

  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
`
export const Top = styled.div`
  position: absolute;
  top: -30px;
  left: 0;

  height: 60px;
  width: 100%;

  border-radius: 50%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
`

export const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;

  height: 50px;
  width: calc(100% - 20px);

  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
`

export const Tea = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  height: 100%;
  width: 100%;

  background: linear-gradient(#c57e65, #e28462);
  border-radius: 50%;
`

export const Handle = styled.div`
  position: absolute;
  right: -70px;
  top: 30px;

  height: 180px;
  width: 160px;

  border: 25px solid #dcdcdc;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(42deg);
`

export const Plate = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;

  transform: translateX(-50%);
  height: 200px;
  width: 500px;

  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0, 0, 0, .2);

  ::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;

    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }

  ::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;

    background: radial-gradient(rgba(0, 0, 0, .2) 25% ,transparent, transparent);
    border-radius: 50%;
  }
`

export const Vapour = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  padding: 0 20px;
`

export const Span = styled.span`
  position: relative;
  bottom: 50px;

  height: 120px;
  min-width: 8px;

  margin: 0 2px 50px;

  display: block;

  background: #fff;
  border-radius: 50%;

  animation: animate 5s linear infinite;
  filter: blur(8px);
  animation-delay: calc(${props => props.n} * 0.5s);

  @keyframes animate {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      transform: translateY(-150px) scaleX(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-250px) scaleX(10);
      opacity: 0;
    }
  }
`
