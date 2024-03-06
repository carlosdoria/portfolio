import styled from 'styled-components'
import { device } from 'styles/breakpoints'
import Link from 'next/link'

export const Content = styled.div`
  margin-top: 12rem;
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
`

export const Text = styled.p`
  font-size: 1.8rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 2.8rem;
  }

  @media screen and (${device.tabletL}) {
    font-size: 3.2rem;
  }
`

export const Title = styled.h1`
  font-size: 3.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (${device.mobileS}) {
    font-size: 4rem;
  }

  @media screen and (${device.tabletS}) {
    font-size: 4.8rem;
    text-align: start;
  }

  @media screen and (${device.tabletL}) {
    font-size: 6rem;
  }
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};

  font-size: 2.4rem;
  text-align: center;

  @media screen and (${device.tabletS}) {
    font-size: 3.2rem;
    text-align: start;
  }

  @media screen and (${device.tabletL}) {
    font-size: 4rem;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;

  @media screen and (${device.tabletM}) {
    gap: 1.8rem;
  }
`

export const CustomLink = styled(Link)`
  width: 100%;

  padding: 1.2rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};

  border-radius: 0.8rem;
  border: ${({ theme }) => `2px ${theme.colors.secondary} solid`};

  @media screen and (${device.tabletS}) {
    width: fit-content;
  }
`

export const OthersWrapper = styled.div`
  display: none;

  @media screen and (${device.tabletS}) {
    display: block;

    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (${device.tabletM}) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (${device.tabletL}) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`
