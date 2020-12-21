import styled from 'styled-components';

interface IButtonsContainer {
  activeMenu: boolean;
}

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
`;

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
`;

export const Logo = styled.a`
  color: var(--second-color);
`;

export const ButtonsContainer = styled.div<IButtonsContainer>`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: var(--header-height);
    right: ${props => (props.activeMenu ? 0 : '-100%')};

    width: 80%;
    height: 100%;

    padding: 2rem;

    background-color: var(--second-color);

    transition: 0.5s;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const IconMenu = styled.div`
  color: var(--second-color);
  font-size: 1.5rem;
  cursor: pointer;
`;
