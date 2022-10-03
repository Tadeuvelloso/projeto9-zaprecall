import Footer from "./Footer";
import GlobalStyle from "./globalStyle";
import Header from "./Header";
import Main from "./Main";
import PERGUNTAS from "./dados"
import { useState } from "react";


export default function App() {
    const [clicados, setClicados] = useState([])
    const [visto, setVisto] = useState([])

    return (
        <>
            <GlobalStyle />
            <Header />
            <Main dados={PERGUNTAS} clicados={clicados} setClicados={setClicados} visto={visto}/>
            <Footer clicados={clicados} setVisto={setVisto} visto={visto}/>
        </>

    )
}
