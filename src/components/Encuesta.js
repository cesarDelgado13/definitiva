import React from "react";

import '../stylesheet/componentes/Encuestas.css'

import BtnPrimary from "./btn_primary";

function Encuesta({ funcion, titulo, descripcion, link }) {
    return (
        <div className="contenedor-encuestas-2">
            <div className="container-titles-2">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href={'link'}>Probar</a>
                <BtnPrimary funcion={funcion} name={'Cancelar'}/>
                <br />
            </div>
        </div>
    )
}

export default Encuesta