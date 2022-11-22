import { motion } from 'framer-motion'
import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Project = styled(motion.div)`
  border-radius: 1.6rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightGray};

  h4 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }
`

export const Content = styled.div`
  padding: 1.2rem 1.2rem 2.4rem;
`

export const Footer = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    padding: 0.8rem;

    font-size: 1.4rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
`
