import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, size } from 'styles/breakpoints'

export const HomeSection = styled(motion.section)`
  max-width: ${size.desktopM};
  min-height: calc(100vh - 6rem);
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media screen and (${device.tabletS}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const PresentationWrapper = styled.div`
  margin: 0 auto 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  row-gap: 0.8rem;

  letter-spacing: 4px;

  @media screen and (${device.tabletS}) {
    flex: 1;

    margin: 0 0 4rem;

    align-items: flex-start;
  }

  @media screen and (${device.tabletM}) {
    margin: 0 auto 4rem;
  }

  @media screen and (${device.desktopS}) {
  }

  p {
    font-size: 2.4rem;

    @media screen and (${device.tabletS}) {
      font-size: 2.8rem;
    }

    @media screen and (${device.desktopS}) {
      font-size: 3.2rem;
    }
  }

  h1 {
    font-size: 4rem;
    text-align: center;

    @media screen and (${device.tabletS}) {
      font-size: 4.8rem;
      text-align: start;
    }

    @media screen and (${device.desktopS}) {
      font-size: 6rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;

    @media screen and (${device.tabletS}) {
      font-size: 2.8rem;
      text-align: start;
    }

    @media screen and (${device.desktopS}) {
      font-size: 3.2rem;
    }
  }
`

export const OuthersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${device.tabletS}) {
    justify-content: flex-end;
  }

  svg {
    @media screen and (${device.tabletM}) {
      height: 300px;
      width: 300px;
    }

    @media screen and (${device.desktopS}) {
      height: 350px;
      width: 350px;
    }
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  row-gap: 2.4rem;
  column-gap: 2.4rem;

  @media screen and (${device.tabletS}) {
    justify-content: flex-start;
  }

  @media screen and (${device.tabletM}) {
    svg {
      height: 50px;
      width: 50px;
    }
  }

  @media screen and (${device.desktopS}) {
    column-gap: 2rem;
  }
`

export const Icon = styled(motion.a)``
