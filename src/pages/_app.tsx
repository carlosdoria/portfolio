import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { setCookie, parseCookies } from 'nookies'

import { Header } from 'components'
import { dark } from 'styles/themes/dark'
import { light } from 'styles/themes/light'

function MyApp ( { Component, pageProps }: AppProps ) {
  const [ theme, setTheme ] = useState<DefaultTheme>( dark )

  const toggleTheme = () => {
    const newTheme = theme.title === 'dark' ? light : dark
    setTheme( newTheme )
    setCookie( undefined, 'theme', JSON.stringify( newTheme ) )
  }

  useEffect( () => {
    const { theme } = parseCookies( undefined, 'theme' )
    if ( theme ) setTheme( JSON.parse( theme ) )
  }, [] )

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Portfólio</title>
        <meta name="description" content="Meu portifólio pessoal" />
      </Head>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
