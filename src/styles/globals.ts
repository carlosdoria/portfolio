import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
    background-color:  ${({ theme }) => theme.colors.background};
  }

  body, textarea {
    /* font-family: Arial, Helvetica, sans-serif; */
    /* color: ${(props) => props.theme.colors.text}; */
  }

  section {
    padding-bottom: 8rem;

    :not(:first-child) {
      padding-top: 8rem;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles
