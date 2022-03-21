import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, size } from 'styles/breakpoints'

export const Title = styled.h2`
  margin: 2rem 0 1rem;

  font-size: 2rem;
  text-align: center;

  @media screen and (${device.tabletM}) {
    margin-bottom: 2rem;

    font-size: 2.5rem;
}
`

export const Wrapper = styled.section`
  max-width: ${size.desktopM};
  margin: 0 auto 3rem;
  padding: 0 16px;
`
