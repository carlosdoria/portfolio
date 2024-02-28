'use client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/globals'
import { light } from 'styles/themes/light'
import { Header } from 'components'
import StyledComponentsRegistry from '../lib/registry'

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
