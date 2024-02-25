import styled from 'styled-components'
import { device } from '../../styles/breakpoints'
import Link from 'next/link'

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  row-gap: 2.4rem;
  column-gap: 2.4rem;

  @media screen and (${device.tabletS}) {
    justify-content: flex-start;
  }

  @media screen and (${device.tabletM}) {
    svg {
      height: 50px;
      width: 50px;
    }
  }

  @media screen and (${device.desktopS}) {
    column-gap: 2rem;
  }
`

export const Icon = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`
