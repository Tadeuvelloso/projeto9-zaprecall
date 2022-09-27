
import React, { ReactDOM } from "react";
import styled from 'styled-components'
import "./css/reset.css"
import img from "./img/setinha.png"

function App (){
    return(
        <Conteudo>
            <img src={img} alt="tralala" />
        </Conteudo>
    )
}




const Conteudo = styled.div`
     width: 100px;
     height: 100px;
     background-color: azure;
`
   
    



ReactDOM.render(App(), document.querySelector(".root"));