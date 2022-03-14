import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Footer = styled.footer`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 3rem 0;

  text-align: center;
`

export const FooterSocialMedias = styled.div`
  margin-bottom: .5rem;
  display: flex;
  justify-content: center;

  column-gap: 1rem;
`

export const Icon = styled.a`
  font-size: 1.8rem;
  color: var(first-color);

  transition: .4s;

  :hover {
  }
`
