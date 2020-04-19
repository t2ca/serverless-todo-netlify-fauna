import React from 'react'
// import { ThemeProvider, Styled } from 'theme-ui'
// import theme from './src/theme'
import { Provider } from './identity-context'

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>
