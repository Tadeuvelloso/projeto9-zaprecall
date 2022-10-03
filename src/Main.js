import styled from "styled-components"
import FlashCard from "./FlashCard";

export default function Main(props) {
  const {dados, clicados, setClicados, visto} = props
  
  return (
    <Deck>
      {dados.map((d, i) => <FlashCard key={i} num={i} dados={d} clicados={clicados} setClicados={setClicados} visto={visto}/>)}
    </Deck>
  )
}


const Deck = styled.div`
  margin: 100px auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--cor-fundo);
  overflow-y: scroll;
  align-items: center;
`;





