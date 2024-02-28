'use client'

import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { setCookie, parseCookies } from 'nookies'
import GlobalStyles from 'styles/globals'
import { dark } from 'styles/themes/dark'
import { light } from 'styles/themes/light'
import { Header } from 'components'
import StyledComponentsRegistry from './registry'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
