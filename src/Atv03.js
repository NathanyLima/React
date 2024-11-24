import React from "react";
import { Link } from "react-router-dom";
import ContadorHM from "./ContadorHM"; 

const Atv03 = () => {
    return (
        <div>
            <h1>Atividade 03</h1>
            <ContadorHM />  
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Atv03;
