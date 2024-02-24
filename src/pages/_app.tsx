'use client'

import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { setCookie, parseCookies } from 'nookies'

import { Footer, Header } from 'components'
import { dark } from 'styles/themes/dark'
import { light } from 'styles/themes/light'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(dark)

  const toggleTheme = () => {
    const newTheme = theme.title === 'dark' ? light : dark
    setTheme(newTheme)
    setCookie(undefined, 'theme', JSON.stringify(newTheme))
  }

  useEffect(() => {
    const { theme } = parseCookies(undefined, 'theme')
    if (theme) setTheme(JSON.parse(theme))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Portfólio</title>
        <meta name='description' content='Meu portfólio pessoal' />
      </Head>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
