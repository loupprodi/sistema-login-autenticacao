import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: Poppins
}

`;

/*box-sizing: border-box serve para que possamos nao se preocupar com as medidas, ou seja, 
height e width sempre serão os mesmo independente do padding ou margin. Se você tiver um componente com 100px
de largura (width), e ele receber 10px de padding, ele ira diminuir os elementos filhos para poder manter esses 10px totais da largura
*/
