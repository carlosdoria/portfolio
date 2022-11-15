import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, size } from 'styles/breakpoints'

export const Wrapper = styled(motion.section)`
  min-height: 100vh;
`

export const Content = styled(motion.div)`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (${device.tabletM}) {
    flex-direction: row;
  }
`

export const AboutDivImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;

    border-radius: 0.5rem;

    @media screen and (${device.tabletM}) {
      width: 300px;
    }
  }
`

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;

  p {
    font-size: 1.8rem;
    line-height: 2.8rem;

    text-indent: 2.4rem;
    text-align: justify;

    @media screen and (${device.tabletM}) {
    }
  }
`
