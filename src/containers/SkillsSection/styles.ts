import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Content = styled.div`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

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

  .AccordionIcon {
    transition: transform 400ms;
  }

  .AccordionTrigger[data-state='open'] .AccordionIcon {
    transform: rotate(180deg);
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
