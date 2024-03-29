import styled from 'styled-components'
import { device, size } from '../../styles/breakpoints'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 6rem;

  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
`

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: ${size.desktopM};

  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};

  text-shadow: ${({ theme }) =>
    theme.title === 'dark'
      ? `0 0 10px ${theme.colors.lightBlue}, 0 0 20px ${theme.colors.lightBlue}, 0 0 10px ${theme.colors.lightBlue}`
      : ''};

  /* background: linear-gradient(180deg, #02fbff, #746cfe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */

  cursor: pointer;
`
