import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Footer = styled.footer`
  padding: 2rem 0;

  text-align: center;

  font-weight: var(--font-semi);

  color: var(--footer-copyright-color);
  background-color: var(--first-background-color);
`

// export const FooterTitle = styled.p`
//   margin-bottom: var(--mb-4);

//   /* font-size: 2rem; */
// `

export const FooterSocialMedias = styled.div`
  margin-bottom: var(--mb-3);
`

export const Icon = styled.a`
  margin: 0 var(--mb-2);

  font-size: 2rem;

  color: var(--footer-first-color);
  transition: .4s;

  :hover {
    color: var(--footer-second-color);
  }
`
