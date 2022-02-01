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
