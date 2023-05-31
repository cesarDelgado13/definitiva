import React from "react";
import { useState } from "react";

import '../stylesheet/componentes/btn-encuestas.css'

import Encuesta from "./Encuesta";

function BtnEncuestas({ funcion, encuestas, titulosEncuestas }) {

    console.log(encuestas)
    const [flagAux, setFlagAux] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [link, setLink] = useState('')

    // const [flagEncuestas, setEncuestas] = useState('False')

    {/* Aqui va a estar la info de cada encuesta seleccinada */ }


    // const ocultarEncuestas = () => {
    //     if (flagEncuestas == 'False')
    //         setEncuestas("True")
    //     if (flagEncuestas == 'True')
    //         setEncuestas("False")

    // }
    const encuestasFunct = (encuesta) => {
        setFlagAux('True')
        setTitulo(encuesta['titulo'])
        setDescripcion(encuesta['descripcion'])
        setLink(encuesta['link'])

        console.log('ENTRE A ENCUESTAS')
    }

    const cerrarContenido = () => {
        setFlagAux('False')
    }



    return (
        <div className="buttonsEncuestas">
            <h3>Encuestas</h3>
            <div className="buttonsEncuestasCotainer">
                <button onClick={() => { encuestasFunct(encuestas[0]) }} className="btn-encuestas-style">{titulosEncuestas[0]}</button>
                <button onClick={() => { encuestasFunct(encuestas[1]) }} className="btn-encuestas-style">{titulosEncuestas[1]}</button>
                <button onClick={() => { encuestasFunct(encuestas[2]) }} className="btn-encuestas-style">{titulosEncuestas[2]}</button>
                <button onClick={funcion} className="btn-encuestas-style">Más encuestas</button>
            </div>
            {flagAux == 'True' && <Encuesta funcion={cerrarContenido} titulo={titulo} descripcion={descripcion} link={link} />}
        </div>
    )

}

export default BtnEncuestas;