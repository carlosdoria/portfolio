import styled from 'styled-components'
import { size } from 'styles/breakpoints'

export const Content = styled.div`
  max-width: ${size.desktopM};
  margin: 0 auto;
  padding: 0 1.6rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4.8rem;
`
