import { createGlobalStyle } from 'styled-components'
import { size } from './breakpoints'

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */

  :root {
    --z-back: -10;
    --z-normal: 1;
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    -webkit-appearance: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100vh;
    font-family:  Roboto, sans-serif;
    background-color:  ${(props) => props.theme.colors.background};
  }

  body, textarea {
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  section {
    padding-bottom: 8rem;
    :not(:first-child) {
      padding-top: 8rem;
    }
  }

  button {
    color: ${(props) => props.theme.colors.text};

    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles
