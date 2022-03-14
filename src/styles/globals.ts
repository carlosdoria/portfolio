import { createGlobalStyle } from 'styled-components'
import { size } from './breakpoints'

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  :root {
    --header-height: 3.5rem;

    /* BREAKING POINTS */
    --mobileS: ${size.mobileS};
    --mobileM: ${size.mobileM};
    --mobileL: ${size.mobileL};
    --tabletS: ${size.tabletS};
    --tabletM: ${size.tabletM};
    --tabletL: ${size.tabletL};
    --desktopS: ${size.desktopS};
    --desktopM: ${size.desktopM};

  /* VARIEBLE COLORS */
    --background-color: ${props => props.theme.colors.background};
    --first-color: ${props => props.theme.colors.primary} ;
    --second-color: #fff;

  /* VARIEBLE FONTS AND TYPES */

    --z-back: -10;
    --z-normal: 1;
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100vh;

    background-color: var(--background-color);
  }

  body, textarea {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--first-color);
  }

  /* section {
    padding-top: 3rem;

    :nth-child(1) {
    padding: 0;
  }

    @media screen and (min-width: 768px) {
      padding-top: 5rem;
      padding-bottom: 3rem;
    }
  } */

  button {
    color: var(--first-color);

    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: var(--first-color);
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles
