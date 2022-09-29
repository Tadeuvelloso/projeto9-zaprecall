import logo from "./img/logo.png"
import styled from "styled-components";

export default function Header (){
    return(
        <Headers>
        <img src={logo} alt="tralala" />
        ZapRecall
      </Headers>
    )
}

const Headers = styled.div`

  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 36px;
  color: white;
  font-family: "Righteous";
  z-index: 1;
  background-color: var(--cor-fundo);

`;