import { createGlobalStyle } from 'styled-components'
import { devices } from './mixins'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #191310;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        scrollbar-width: thin;          /* "auto" or "thin" */
        scrollbar-color: #888 #191310;   /* scroll thumb and track */ 

        @media ${devices.tablet} {
            font-size: 90%;
        }

        @media ${devices.phone} {
            font-size: 60%;
        }

        @media ${devices.desktop} {
            font-size: 95%;
        }
    }

    body {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Titillium Web, sans-serif;
    }
`
