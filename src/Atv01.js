import React from "react";
import { Link } from "react-router-dom";
import Relogio from "./Relogio"; 
import Letreiro from "./Letreiro"; 

function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />  
            <Letreiro />  
            <Link to="/">Voltar para a Home</Link> 
        </>
    );
}

export default Atv01;
