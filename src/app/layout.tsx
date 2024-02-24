'use client'

import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { setCookie, parseCookies } from 'nookies'
import StyledComponentsRegistry from 'lib/registry'
import GlobalStyles from 'styles/globals'
import { dark } from 'styles/themes/dark'
import { light } from 'styles/themes/light'
import { Header } from 'components'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={light}>
          <Header />
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
