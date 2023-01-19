import 'styled-components'

import { dark } from 'styles/themes/dark'

type Theme = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
