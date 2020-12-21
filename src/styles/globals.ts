import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  :root {
    --header-height: 3rem;
    --font-semi: 600;
  }

  /* VARIEBLE COLORS */
  :root {
    --first-color: #4070f4;
    --second-color: #0E2431;
  }
  /* VARIEBLE FONTS AND TYPES */
  :root {
    --big-font-size: 2rem;
    --h2-font-size: 1.25rem;
    --normal-font-size: 0.938rem;
  }

  @media screen and (min-width: 768px) {
    :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
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
    /* background-color: #ecf1f8; */

    scroll-behavior: smooth;
  }

  body {
    margin: var(----header-height) 0 0 0;

    font-size: var(----normal-font-size);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--secondary-text-color);
  }

  section {
    padding-top: 3rem;
  padding-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;
