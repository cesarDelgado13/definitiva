import React from "react";

import '../stylesheet/componentes/btn-admin.css'


function BtnAdmin ({funcion}) {

    return (
        <div className="buttonsContainer">
            <button onClick={funcion[0]} className="btn-admin-style">Blog</button>           
            <button onClick={funcion[1]} className="btn-admin-style">Card</button>           
            <button onClick={funcion[2]} className="btn-admin-style">Encuestas</button>           
            <button onClick={funcion[3]} className="btn-admin-style">Agregar</button>           
        </div>
    )

}

export default BtnAdmin;