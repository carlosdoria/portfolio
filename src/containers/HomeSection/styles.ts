import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device } from 'styles/breakpoints'

export const HomeSection = styled( motion.section )`
  max-width: ${device.desktopM};
  min-height: calc(100vh - var(--header-height));
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PresentationWrapper = styled.div`
  margin: 2rem auto 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: .5rem;

  letter-spacing: 1px;

  p {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: normal;
  }
`

export const ButtonWrapper = styled.div`
  margin-bottom: 3rem;

  button {
    padding: .5rem 1rem;

    font-size: 1rem;
    /* color: #32A9D9; */

    /* border: 2px solid #4391F0; */
    border: 1px solid #32A9D9;
    border-radius: 5px;

    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`

export const OuthersWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialWrapper = styled.div`
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  row-gap: .25rem;
`
