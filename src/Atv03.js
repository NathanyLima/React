import React from "react";
import { Link } from "react-router-dom";
import atividade3 from "./atividade3"; 

const Atv03 = () => {
    return (
        <div>
            <h1>Atividade 03</h1>
            <atividade3 />  
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Atv03;
