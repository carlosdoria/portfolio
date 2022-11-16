import styled from 'styled-components'
import { device, size } from 'styles/breakpoints'

export const Content = styled.div`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 0 16px;

  .AccordionRoot {
    margin-bottom: 3.2rem;
  }

  .AccordionHeader button {
    width: 100%;
  }

  .AccordionContent {
    overflow: hidden;
  }

  .AccordionContent[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContent[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`

export const SkillsGroup = styled.div`
  margin-top: 3.2rem;
`

export const SkillsSubtitle = styled.p`
  padding: 0.8rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #cccccc;
  /* border-radius: 4px; */

  font-size: 2.4rem;
  font-weight: 600;

  line-height: 2.4rem;
  cursor: pointer;

  justify-content: space-between;

  @media screen and (${device.tabletM}) {
    font-size: 3.2rem;
  }
`

export const SkillsWrapper = styled.ul`
  margin: 48px 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 48px;

  list-style-type: none;

  @media screen and (${device.mobileM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${device.tabletS}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${device.tabletM}) {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    /* width: 250px;
  height: 60px; */
  }
`

export const Skill = styled.li`
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
    color: ${({ theme }) => theme.colors.primary};
    fill: currentColor;
  }
`
