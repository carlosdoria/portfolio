import { motion } from 'framer-motion'
import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Project = styled(motion.div)`
  border-radius: 1.6rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightGray};
  img {
    min-height: 150px;
    max-height: 200px;
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

    color: ${({ theme }) => theme.colors.lightGray};
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
    color: ${({ theme }) => theme.colors.lightGray};

    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 4px;
  }
`
