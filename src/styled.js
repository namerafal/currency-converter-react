import { createGlobalStyle } from "styled-components";
import background from "./images/background.png"

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }
    
   body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 98vh;
        font-family: "Lato", sans-serif;
        background-image: url(${background});
        background-position: center;
    }
`;