import { createGlobalStyle } from 'styled-components'
import { size } from './breakpoints'

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  @import '@radix-ui/colors/blackA.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/violet.css';

  :root {

    --header-height: 6rem;


    --z-back: -10;
    --z-normal: 1;
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-appearance: none;
    letter-spacing: 2px;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;

    background-color:  ${(props) => props.theme.colors.background};
  }

  body, textarea {
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props) => props.theme.colors.primary};
  }

  section {
    padding-bottom: 8rem;
    :not(:first-child) {
      padding-top: 8rem;
    }
  }

  button {
    color: ${(props) => props.theme.colors.primary};

    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyles
