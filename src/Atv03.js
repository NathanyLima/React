import React from "react";
import { Link } from "react-router-dom";
import Atividade3 from "./Atividade3"; 

const Atv03 = () => {
    return (
        <div>
            <h1> Atividade 03</h1>
            <Atividade3 />  
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Atv03;
