import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html,body{
max-width: 956px;
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
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
}

h1,h2,h3,h4,h5,h6,p{
    font-family: 'Roboto', sans-serif;
}

h1{
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
}
h2{
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
}
h3{
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
}
h4{
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
}
h5{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
}
h6{
    font-size: 11px;
    line-height: 13px;
    font-weight: 400;
}



@font-face {
    font-family: "mix";
    src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
    unicode-range:U+0041-005A, U+0061-007A;  /* 英文字母 unicode 區間 */
    font-weight: 700;
  }

 

`;

export default GlobalStyle;
