import styled from 'styled-components'
import { device } from 'styles/breakpoints'

export const Wrapper = styled.section``

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (${device.tabletM}) {
    flex-direction: row;
  }
`

export const AboutDivImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50% 50% 50% 50% / 30% 27% 73% 70%;
  }
`

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.8rem;
    line-height: 2.8rem;

    text-align: justify;
  }
`
