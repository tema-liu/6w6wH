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

h1{
    font-size: 20px;
}
h2{
    font-size: 17px;
}
h3{
    font-size: 15px;
}
h4{
    font-size: 14px;
}
h5{
    font-size: 12px;
}
h6{
    font-size: 11px;
}

`;

export default GlobalStyle;
