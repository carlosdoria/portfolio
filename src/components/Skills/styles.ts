import styled from 'styled-components'
import { device } from 'styles/breakpoints'

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  svg {
    width: 3.2rem;
    fill: currentColor;
  }
`

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 1.8rem;
  }
`
