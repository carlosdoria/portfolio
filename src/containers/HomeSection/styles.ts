import styled from 'styled-components'
import { device } from 'styles/breakpoints'
import Link from 'next/link'

export const Content = styled.div`
  margin-top: 20rem;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  @media screen and (${device.tabletS}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const PresentationWrapper = styled.div`
  margin: 0 auto 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1.2rem;

  letter-spacing: 4px;

  @media screen and (${device.tabletS}) {
    flex: 1;

    margin: 0 0 4rem;

    align-items: flex-start;
  }

  @media screen and (${device.tabletM}) {
    margin: 0 auto 4rem;
  }

  @media screen and (${device.desktopS}) {
  }
`

export const Title = styled.h1`
  font-size: 3.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  /* background: linear-gradient(180deg, #02fbff, #746cfe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */

  text-shadow: ${({ theme }) =>
    theme.title === 'dark'
      ? `0 0 10px ${theme.colors.lightBlue}, 0 0 20px ${theme.colors.lightBlue}, 0 0 10px ${theme.colors.lightBlue}`
      : ''};

  @media screen and (${device.mobileS}) {
    font-size: 4rem;
  }

  @media screen and (${device.tabletS}) {
    font-size: 4.8rem;
    text-align: start;
  }

  @media screen and (${device.desktopS}) {
    font-size: 6rem;
  }
`

export const Subtitle = styled.h3`
  font-size: 2.4rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 3.2rem;
    text-align: start;
  }

  @media screen and (${device.desktopS}) {
    font-size: 4rem;
  }
`

export const Text = styled.p`
  font-size: 1.8rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 2.8rem;
  }

  @media screen and (${device.desktopS}) {
    font-size: 3.2rem;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;

  @media screen and (${device.desktopM}) {
    gap: 2.4rem;
  }
`

export const CustomLink = styled(Link)`
  width: 100%;

  padding: 0.8rem 1.4rem;

  text-align: center;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.white};

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.secondary};

  @media screen and (${device.tabletS}) {
    width: fit-content;
  }
`

export const OthersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${device.tabletS}) {
    justify-content: flex-end;
  }

  svg {
    @media screen and (${device.tabletM}) {
      height: 300px;
      width: 300px;
    }

    @media screen and (${device.desktopS}) {
      height: 350px;
      width: 350px;
    }
  }
`
