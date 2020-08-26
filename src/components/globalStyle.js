import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #0200c7;
    --color-second: #f4f4f4;
    font-family: 'Montserrat', sans-serif;
    --font-code: monospace;

    --spacing: 2.0rem;
  }

  *,
  *:after,
  *:before {
    box-sizing: content-box;
    border: 0;
    margin: 0;
    padding: 0;
  }

  body {
    background-color:#f4f4f4;
  }

  .container {
    margin-top: 140px;
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
  }

`
export default GlobalStyle