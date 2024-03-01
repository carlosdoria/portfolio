'use client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/globals'
import { light } from 'styles/themes/light'
import StyledComponentsRegistry from '../lib/registry'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
