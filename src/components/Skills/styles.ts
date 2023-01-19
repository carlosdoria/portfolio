import styled from 'styled-components'
import { device } from 'styles/breakpoints'

interface SkillProps {
  color: string
}

export const Skill = styled.li<SkillProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 1.6rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 1.8rem;
  }

  svg {
    width: 32px;
    color: ${({ theme, color }) =>
      theme.title === 'dark' && color === '#000000'
        ? theme.colors.primary
        : color};
    fill: currentColor;
  }
`
