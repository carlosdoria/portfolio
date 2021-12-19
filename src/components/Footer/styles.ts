import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Footer = styled.footer`
  margin: 1rem 0;
  padding-bottom: 1rem;

  color: var(--footer-copyright-color);
  text-align: center;
`

// export const FooterTitle = styled.p`
//   margin-bottom: var(--mb-4);

//   /* font-size: 2rem; */
// `

export const FooterSocialMedias = styled.div`
  margin-bottom: .5rem;
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
