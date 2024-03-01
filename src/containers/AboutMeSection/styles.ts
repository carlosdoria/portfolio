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
    border-radius: 46% 34% 48% 32% / 21% 62% 18% 59%;
    border-radius: 56% 44% 25% 75% / 77% 52% 48% 23%;
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
