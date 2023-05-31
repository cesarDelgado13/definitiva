import React from "react";

//estilos
import '../stylesheet/componentes/Card.css'

function Card ({titulo, informacion, image, fecha, fuente}) {
    return(
        <div className="div-card">
            <h1>{titulo}</h1>
            <p>{informacion}</p>
            <div className="img-card">
                <img src={image} alt="Imagen"/>
            </div>
            <h3>{fuente}</h3>
            <h4>{fecha}</h4>
        </div>
    )
}

export default Card;