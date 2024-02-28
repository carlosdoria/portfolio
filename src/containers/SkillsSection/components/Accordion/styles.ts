import styled from 'styled-components'
import { device } from 'styles/breakpoints'

export const SkillTitle = styled.p`
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  font-size: 2.4rem;
  font-weight: 600;

  line-height: 2.4rem;
  cursor: pointer;

  @media screen and (${device.tabletM}) {
    font-size: 3.2rem;
  }
`

export const SkillsWrapper = styled.ul`
  margin: 48px 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 48px;

  @media screen and (${device.mobileM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${device.tabletS}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${device.tabletM}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
