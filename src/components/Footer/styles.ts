import styled, { keyframes } from 'styled-components'
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
  color: ${({ theme }) => theme.colors.primary};

  transform: scale(1);
  transition: transform 0.5s;

  /* Define a animação para o hover */
  &:hover {
    animation: scaleHover 0.5s forwards;
    color: ${({ theme }) => theme.colors.secondary};
  }

  /* Define a animação para quando o mouse sai */
  &:not(:hover) {
    animation: scaleLeave 0.5s forwards;
  }

  @keyframes scaleHover {
    from {
      transform: scale(1);
    }

    50% {
      transform: scale(1.4);
    }

    to {
      transform: scale(1.2);
    }
  }

  @keyframes scaleLeave {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
`
