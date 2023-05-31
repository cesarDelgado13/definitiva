import React, { useState } from "react";

import '../stylesheet/componentes/titles.css'
import '../stylesheet/componentes/Encuestas.css'

import Encuesta from "./Encuesta";
import BtnPrimary from "./btn_primary";

function Titles({ flagEncuestas, titulo, link, descripcion }) {
    
    const [flagAux, setFlagAux] = useState('False')


    
    // const [flagEncuestas, setEncuestas] = useState('False')

    {/* Aqui va a estar la info de cada encuesta seleccinada */ }


    // const ocultarEncuestas = () => {
    //     if (flagEncuestas == 'False')
    //         setEncuestas("True")
    //     if (flagEncuestas == 'True')
    //         setEncuestas("False")

    // }
    const encuestas = () => {
        setFlagAux('True')
        console.log('ENTRE A ENCUESTAS')
        console.log('ESTO VALE FLAG', flagEncuestas)
    }

    const cerrarContenido = () =>{
        setFlagAux('False')
    }


    return (
        <div className="container-titles">
            <button onClick={() => encuestas()}>{titulo}</button>
            {flagAux == 'True' && <Encuesta funcion = {cerrarContenido} titulo={titulo} descripcion={descripcion} link={link} />}
         </div>

    )
}

export default Titles