'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('../../public/fonts/poppins-v21-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../../public/fonts/poppins-v21-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('../../public/fonts/poppins-v21-latin-600.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Oxygen', 'Ubuntu', 'Cantarel', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
  }
`

export default GlobalStyles
