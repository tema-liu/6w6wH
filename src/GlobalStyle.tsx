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
    line-height: 25px;
}
h2{
    font-size: 17px;
    line-height: 22px;
}
h3{
    font-size: 15px;
    line-height: 20px;
}
h4{
    font-size: 14px;
    line-height: 20px;
}
h5{
    font-size: 12px;
    line-height: 16px;
}
h6{
    font-size: 11px;
    line-height: 13px;
}



@font-face {
    font-family: "mix";
    src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
    unicode-range:U+0041-005A, U+0061-007A;  /* 英文字母 unicode 區間 */
    font-weight: 700;
  }

 /* @font-face {
    font-family:"mix";
    src:  url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap&text=U+4E00-9FFF
    ) format('woff2');
    unicode-range: U+4E00-9FFF;
    font-weight:400;
} */

 

`;

export default GlobalStyle;
