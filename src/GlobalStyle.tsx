import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html,body{
max-width: 768px;
margin: 0 auto;
width: 100%;
height: 100dvh;
font-family: 'Roboto', sans-serif;
}

*,*::after,*::before{    
box-sizing: border-box;
margin: 0;
padding: 0;
border: none;
outline: none;
}

a,button{
    cursor: pointer;
}



`;

export default GlobalStyle;
