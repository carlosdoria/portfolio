import { motion } from 'framer-motion'
import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Project = styled(motion.div)`
  padding: 1.6rem;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.primary};

  /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
  border-radius: 1.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  /* background: #629be8; */

  img {
    min-height: 150px;
    max-height: 200px;

    margin-bottom: 1.2rem;

    border-radius: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;

    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  p {
    margin-bottom: 1.6rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`

export const Content = styled.div`
  /* padding: 1.2rem 1.2rem 2.4rem; */
`

export const Footer = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    padding: 0.6rem 1.2rem;

    display: flex;
    flex-direction: row;
    /* align-items: center; */

    font-size: 1.4rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
  }

  svg {
    margin-left: 8px;
  }
`
