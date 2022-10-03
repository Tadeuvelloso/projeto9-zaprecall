import { useState } from "react"
import styled from "styled-components"

export default function Footer(props) {
  const {clicados, visto, setVisto} = props
  const [contador, setContador] = useState(0);

  function check (){
    let arrayVistos = [...clicados]
    setVisto(arrayVistos)
  }
  
  return (
    <Footers>
      <Botoes>
        <Erro onClick={() => check()}>Não Lembrei</Erro>
        <Quase onClick={() => check() }>Quase não lembrei</Quase>
        <Zap onClick={() => check() }>Zap!</Zap>
      </Botoes>
      <Pontos>{contador}/8 CONCLUÍDOS</Pontos>
    </Footers>
  )
}

const Footers = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  min-height: 70px;
  padding: 14px 10px;
  font-size: 18px;
  color: black;
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

`
const Botoes = styled.div`
width: 280px;
display: flex;
justify-content: space-between;
margin: auto;
`
const Button = styled.button`
width: 85px;
height: 40px;
color: white;
font-size: 12px;
font-weight: 700;
border-radius: 4px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border: none;
  &:hover{
    filter: brightness(0.7)
  }

`
const Erro = styled(Button)`
  background-color: var(--cor-nao-lembrei);
`
const Quase = styled(Button)`
  background-color: var(--cor-quase-nao-lembrei);
`
const Zap = styled(Button)`
  background-color: var(--cor-zap);
`
const Pontos = styled.div`
width: 250px;
height: 30px;
margin: auto;
`
