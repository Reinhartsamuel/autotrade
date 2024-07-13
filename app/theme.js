// theme.js

// 1. import `extendTheme` function
import { background, extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    dark: {
      bg: 'red', // override default dark mode background color
    },
  },
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme