import styled from "styled-components"
import FlashCard from "./FlashCard";



export default function Main() {
  return (
    <Deck>
      <FlashCard/>
      <FlashCard/> 
      <FlashCard/> 
      <FlashCard/> 
      <FlashCard/> 
      <FlashCard/>  
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





