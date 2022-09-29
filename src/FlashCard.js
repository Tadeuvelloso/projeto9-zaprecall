import styled from "styled-components"


export default function FlashCard() {
    return (
        <FlashCards>
            <p>titulo carta</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Play</title><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /></svg>
        </FlashCards>
    )
}

const FlashCards = styled.div`
  width: 300px;
  height: 50px;
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