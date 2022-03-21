import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, size } from 'styles/breakpoints'

export const HomeSection = styled( motion.section )`
  max-width: ${size.desktopM};
  min-height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${device.tabletM}) {
  }
`

export const PresentationWrapper = styled.div`
  margin: 3rem auto 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: .25rem;

  letter-spacing: 3px;

  p {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: normal;
  }

  @media screen and (${device.tabletM}) {
    margin: 5rem auto 4rem;

    p {
      font-size: 2rem;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media screen and (${device.desktopS}) {
    margin-top: 7rem;

    p {
      font-size: 2rem;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.2rem;
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  column-gap: 1.5rem;

  a {
    padding: .5rem 1rem;

    font-size: 1.2rem;
    /* color: #32A9D9; */

    /* border: 2px solid #4391F0; */
    border: 1px solid #a099e9;
    border-radius: 5px;
  }
`

export const OuthersWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${device.tabletM}) {
    svg {
      height: 300px;
      width: 300px;
    }
  }
`

export const SocialWrapper = styled.div`
  /* position: absolute; */
  /* left: 0; */
  margin-bottom: 3rem;

  display: flex;
  flex-direction: row;
  row-gap: 1.5rem;
  column-gap: 1rem;

  @media screen and (${device.tabletM}) {
    column-gap: 1.5rem;

    svg {
      height: 45px;
      width: 45px;
    }
  }

  @media screen and (${device.desktopS}) {
    column-gap: 2rem;
  }
`

export const Icon = styled( motion.a )`
`
