import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <QueryClientProvider client={queryClient}>
            <App />
         </QueryClientProvider>
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
