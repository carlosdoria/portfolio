import styled from 'styled-components'
import { motion } from 'framer-motion'

interface INavMenu {
  activeMenu: boolean;
}

export const Header = styled( motion.header )`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-background-color);
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`

export const Nav = styled.nav`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);

  @media screen and (min-width: 768px) {
    height: calc(var(--header-height) + 1rem);
  }

  @media screen and (min-width: 1024px) {
    height: calc(var(--header-height) + 2rem);

    margin-left: auto;
    margin-right: auto;
  }
`

export const Logo = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--second-color);

  cursor: pointer;

  @media screen and (min-width: 1024px) {
  font-size: 1.7rem;
  }
`

export const NavMenu = styled.div<INavMenu>`
  @media screen and (max-width: 767px) {
    position: fixed;
    top: var(--header-height);
    right: ${props => ( props.activeMenu ? 0 : '-100%' )};

    width: 80%;
    height: 100%;

    padding: 2rem;

    background-color: var(--second-color);

    transition: 0.5s;
  }
`

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 767px) {
    display: flex;
    padding-top: 0;
  }
`

export const NavContainer = styled.li`
  margin-bottom: var(--mb-4);

  @media screen and (min-width: 768px) {
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
`

export const NavLink = styled.a`
  position: relative;

  color: #fff;
  cursor: pointer;

  transition: .5s;

  ::after {
    position: absolute;
    left: 0;
    top: 2rem;
    content: '';

    height: 0.20rem;

    background-color: var(--first-color);

    transition: .5s;
    opacity: 0;
  }

  :hover::after {
    width: 100%;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    color: var(--second-color);
    text-decoration: none;

    ::after {
      width: 0;
      transition: .5s;
    }

    :hover {
      color: var(--first-color);
    }
  }
`

export const IconMenu = styled.div`
  color: var(--second-color);
  font-size: 1.5rem;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
