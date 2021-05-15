import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  :root {
    --header-height: 3rem;
    --font-semi: 600;
  }

  /* VARIEBLE COLORS */
  :root {
    --first-background-color: #050410;
    --first-color: #3f70f3;
    --second-color: #fff;
    --footer-first-color: #fff;
    --footer-second-color: #3f70f3;

    --bb_8-bg: #F5FAFC;
    --bb_8-base: #EBF2FA;
    --bb_8-base-tint: #A7D0E0;
    --bb_8-stroke: #244356;
    --bb_8-orange: #FDC23E;
    --bb_8-blue: #449BAA;
    --bb_8-red: #FF7761;
  }

  /* VARIEBLE FONTS AND TYPES */
  :root {
    --extraLarge-font-size: 2.8rem;
    --large-font-size: 2rem;
    --medium-font-size: 1.8rem;
    --h2-font-size: 1.8rem;
    --normal-font-size: 1rem;

    @media screen and (min-width: 600px) {
      --extraLarge-font-size: 4rem;
      --large-font-size: 2.8rem;
      --medium-font-size: 2.8rem;
      --h2-font-size: 2.4rem;
      --normal-font-size: 1.1rem;
    }

    @media screen and (min-width: 768px) {
      --large-font-size: 3.3rem;
    }
  }

  :root {
    --mb-1: 0.5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 2.5rem;
    --mb-6: 3rem;
  }

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
  }

  html, body, #__next {
    height: 100vh;

    background-color: var(--first-background-color);
    cursor: initial;
    scroll-behavior: smooth;
  }

  body, textarea {
    font-size: var(--normal-font-size);
    font-family: Arial, Helvetica, sans-serif;
    color: var(--second-color);

    @media screen and (max-height: 650px) {
      margin-top: var(--header-height);
    }
  }

  section {
    padding-top: 3rem;
    padding-bottom: 2rem;

    :nth-child(1) {
    padding: 0;
  }

    @media screen and (min-width: 768px) {
      padding-top: 5rem;
      padding-bottom: 3rem;
    }
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }


`

export default GlobalStyles
