import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device } from '../../styles/breakpoints'

interface INavMenu {
  activeMenu: boolean;
}

export const Header = styled( motion.header )`
  position: fixed;
  z-index: var(--z-fixed);

  width: 100%;
  height: var(--header-height);

  background-color: var(--first-background-color);
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: ${device.desktopS};

  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--second-color);

  /* :hover { */
    text-shadow:
        0 0 10px #00b3ff,
        0 0 20px #00b3ff,
        /* 0 0 30px #00b3ff,
        0 0 60px #00b3ff, */
        0 0 10px #00b3ff
      ;
  /* } */

  cursor: pointer;

  @media screen and (min-width: 1024px) {
  font-size: 1.7rem;
  }
`

export const NavList = styled.ul<INavMenu>`
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;

    @media screen and (${device.tabletM}) {
      position: fixed;
      top: var(--header-height);
      /* right: ${props => ( props.activeMenu ? 0 : '-100%' )}; */
      right: 0;

      width: 80%;
      height: 100%;
      padding: 1rem;

      flex-direction: column;

    transition: 0.5s;
  }
`

// export const NavList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;

//   @media screen and (min-width: 767px) {
//     display: flex;
//     padding-top: 0;
//   }
// `

export const NavContainer = styled.li`
`

export const NavLink = styled.a`
  position: relative;

  color: #000;
  cursor: pointer;

  transition: .5s;

  ::after {
    position: absolute;
    left: 0;
    top: 2rem;
    content: '';

    height: 0.20rem;

    background-color: var(--second-color);
    box-shadow:
      0 0 10px #00b3ff,
      0 0 20px #00b3ff,
      0 0 40px #00b3ff,
      0 0 80px #00b3ff,
      0 0 10px #00b3ff
    ;

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
      text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 80px #00b3ff,
    0 0 10px #00b3ff
  ;    }
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
