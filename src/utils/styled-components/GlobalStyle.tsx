import { createGlobalStyle } from "styled-components";
import "material-symbols";
const GlobalStyle = createGlobalStyle`

    html,body{
max-width: 956px;
margin: 0 auto;
padding: 0;
width: 100%;
height: 100%;
font-family: 'Roboto', sans-serif;
font-weight: 400;

}

*,*::after,*::before{    
box-sizing: border-box;
margin: 0;
padding: 0;
border: none;
outline: none;
-webkit-tap-highlight-color: transparent;
}

a,button{
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    color:initial;
    text-decoration: none;
}


h1,h2,h3,h4,h5,h6,p,input,textarea{
    font-family: 'Roboto', sans-serif;
    word-break: break-word; /* 解決中文字換行問題 */
    overflow-wrap: break-word; /* 備用屬性 */
    white-space: normal; /* 確保文字會換行 */
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
    letter-spacing: -0.41px;
}
h3{
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: -0.24px;
}
h4{
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.25px;
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
    letter-spacing: 0.07px;
}
span{
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    letter-spacing: 0.38px;

}

label{
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
}

p{
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: -0.41px;
}

img{
    vertical-align: middle;
}
button{

    background: transparent;
}
textArea{
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
 
}

@font-face {
    font-family: "mix";
    src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
    /* unicode-range:U+0041-005A, U+0061-007A;  英文字母 unicode 區間 */
  }

 

`;

export default GlobalStyle;
