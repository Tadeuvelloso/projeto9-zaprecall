import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  --cor-fundo: #FB6B6B;
  --cor-fundo-card: #FFFFD4;
  --cor-nao-lembrei: #FF3030;
  --cor-quase-nao-lembrei: #FF922E;
  --cor-zap: #2FBE34;
  --preto: #333333;
}
    body {
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--preto);
  font-family: 'Recursive', sans-serif;
  background-color: var(--cor-fundo);
}
`;


export default  GlobalStyle;

