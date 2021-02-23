import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  :root {
    --header-height: 3rem;
    --font-semi: 600;
  }

  /* VARIEBLE COLORS */
  :root {
    --first-background-color: #000;
    --first-color: #4070f4;
    --second-color: #0E2431;
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

  section + section {
    padding-top: 3rem;
    padding-bottom: 2rem;

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
