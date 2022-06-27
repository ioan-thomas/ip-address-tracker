import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 18px
    }

    a {
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`