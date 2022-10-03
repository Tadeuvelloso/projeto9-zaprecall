import { useState } from "react";
import styled from "styled-components"
import setinha from "./img/setinha.png"

export default function FlashCard(props) {
    const {num, dados, clicados, setClicados, visto} = props
    const [aberto, setAberto] = useState(true)
    const [pergunta, setPergunta] = useState(dados.p)
    function abreCarta (){  
        setAberto(false)
    }
    function verResposta(dados) {
        let resposta = dados.r
        setPergunta(resposta)
        if(pergunta === dados.r){
            setPergunta(dados.p)
            setAberto(true)
            let novoArray = [...clicados, dados]
            setClicados(novoArray)
        }
    }

    return (
        <FlashCards >
            {aberto ? <p>Pergunta {num+1}</p>:
            <Aberto>
                <p>{pergunta}</p> 
                <img src={setinha} onClick={() => verResposta(dados)}/>
            </Aberto>}
            {aberto ? <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" onClick={() => abreCarta()} viewBox="0 0 512 512">
                <title>
                Play
                </title>
            <path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
            </svg> : <br/>}
        </FlashCards>
    )
}

const FlashCards = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;

    svg {
        height: 23px;
        width: 23px;
    }
`;

const Aberto = styled.div`
  min-height: 130px;
  width: 110%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--cor-fundo-card);
  cursor: pointer;
  padding: 20px 10px;
  position: relative;
  font-size: 20px;
    & img{
        width: 21px;
        height: 21px;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
`