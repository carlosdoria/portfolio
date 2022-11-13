import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, size } from '../../styles/breakpoints'

export const Header = styled(motion.header)`
  position: fixed;
  z-index: var(--z-fixed);

  height: var(--header-height);
  width: 100%;

  background: ${(props) => props.theme.colors.background};
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

export const Logo = styled.a`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 10px #00b3ff;

  cursor: pointer;

  @media screen and (${device.desktopS}) {
  }
`
export const Button = styled.button`
  border: none;

  cursor: pointer;
`
