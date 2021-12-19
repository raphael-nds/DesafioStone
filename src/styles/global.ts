import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
     html {
        font-size: 62.5%;
     }

     body,
     #root {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 300;
     }

     input,
     textarea,
     input::placeholder,
     button {
        font-family: 'Roboto', sans-serif;
     }

     a {
        font-size: ${theme.font.sizes.xsm};
        line-height: 1.6rem;
        letter-spacing: 0.15px;

        color: ${theme.colors.main.blue};
     }

     .react-modal-overlay {
        background: rgba(0, 0, 0, 0.4);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
     }

     .react-modal-content {
        background: #fff;
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
           0px 24px 38px 3px rgba(0, 0, 0, 0.14),
           0px 9px 46px 8px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        outline: none;

        margin: 4rem 1.6rem;
     }
  `}
`

export default GlobalStyles
