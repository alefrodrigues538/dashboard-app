import '../styles/globals.css'
import '../styles/css-variables.css'
import type { AppProps } from 'next/app'

// CHAKRA CONFIG
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

//LAYOUTS
import MainLayout from '../layouts/main.layout'
import SidebarLayout from '../layouts/sidebar.layout'
import HeaderLayout from '../layouts/header.layout'
import GlobalContext from '../contexts'

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <ChakraProvider theme={theme}>
        <MainLayout
          Header={<HeaderLayout />}
          Sidebar={<SidebarLayout />}
          Content={<Component {...pageProps} />}
        />
      </ChakraProvider>
    </GlobalContext>
  )
}

export default App
