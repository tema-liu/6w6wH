import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    html,body{
width: 100%;
height: 100dvh;
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
