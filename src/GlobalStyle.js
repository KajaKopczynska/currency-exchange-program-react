import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
      box-sizing: inherit;
    }

    #root {
         font-family: 'Montserrat', sans-serif;
         display: flex;
         align-items: top;
         justify-content: center;
         min-height: 100vh;
         background-image: url("${background}");
         background-repeat: no-repeat;
         background-size: 900px;
         background-position: 50% 20%;
         background-color: rgb(210, 224, 248);
         margin: 0 auto;
         text-align: center;
         color: #84878b;
         line-height: 2;
         font-size: 16px;
         font-weight: 400;
         padding: 15px;
    }
`;