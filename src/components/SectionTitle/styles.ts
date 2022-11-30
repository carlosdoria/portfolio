import styled from 'styled-components'
import { device } from 'styles/breakpoints'

export const Title = styled.h3`
  margin: 2rem 0 4.8rem;

  font-size: 3.2rem;
  text-align: center;
  font-weight: 700;

  @media screen and (${device.tabletM}) {
    margin-bottom: 6rem;

    font-size: 4.8rem;
  }
`
