import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Footer = styled.footer`
  padding: 2rem 0;

  text-align: center;

  font-weight: var(--font-semi);

  color: #fff;
  background-color: var(--second-color);
`

export const FooterTitle = styled.p`
  margin-bottom: var(--mb-4);

  font-size: 2rem;
`

export const FooterSocialMedias = styled.div`
  margin-bottom: var(--mb-4);
`

export const FooterIcon = styled( motion.a )`
  margin: 0 var(--mb-2);

  font-size: 1.5rem;

  color: #fff;
`
