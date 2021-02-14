import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;
`

export const WorkImage = styled.img`
  transition: 1.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
`
