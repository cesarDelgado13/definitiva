import React from "react";

//Estilos
import '../stylesheet/componentes/btn-primary.css'

function BtnPrimary ({name, funcion}) {
    
    return (
        <div >
            <button onClick={funcion} className="btn-primary-style">{name}</button>           
        </div>
    )
}

export default BtnPrimary