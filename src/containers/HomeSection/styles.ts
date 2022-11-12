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
  justify-content: center;
  gap: 24px;

  @media screen and (${device.tabletS}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const PresentationWrapper = styled.div`
  margin: 3rem auto 2.4rem;

  display: flex;

  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  row-gap: 0.4rem;

  letter-spacing: 3px;

  p {
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: normal;
    text-align: center;;
  }


  @media screen and (${device.tabletS}) {
    flex: 1;
    margin: 0;
    align-items:  flex-start;
  }

  @media screen and (${device.tabletM}) {
    margin: 5rem auto 4rem;

    p {
      font-size: 2.4rem;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media screen and (${device.desktopS}) {
    margin-top: 7rem;

    p {
      font-size: 2.6rem;
    }

    h1 {
      font-size: 4.2rem;
    }

    h2 {
      font-size: 3.2rem;
    }
  }
`

export const OuthersWrapper = styled.div`
  /* position: relative; */
  /* width: 100%; */

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${device.tabletS}) {
    justify-content: flex-end;
  }

  @media screen and (${device.tabletM}) {
    svg {
      height: 300px;
      width: 300px;
    }
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  row-gap: 2.4rem;
  column-gap: 1rem;

  @media screen and (${device.tabletS}) {
    justify-content: flex-start;
  }

  @media screen and (${device.tabletM}) {
    column-gap: 2.4rem;

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
