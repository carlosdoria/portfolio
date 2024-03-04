import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Footer = styled.footer`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 6rem 0 3.2rem;

  text-align: center;
`

export const CopyRightText = styled.p`
  font-size: 1.6rem;
`

export const FooterSocialMedias = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;

  column-gap: 2.4rem;
`

export const Icon = styled.a`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary};
`
