import React from "react";

// Componente
import FormEditar from "./form_editar";
import AlertEliminar from "./AlertEliminar";
import CreateInfo from "./CreateInfo";

// Navegacion
import { Navigate, useNavigate } from "react-router-dom";

// Estilos
import '../stylesheet/componentes/AccionesAdmin.css'
import { useState } from "react";

//BACK
import Axios from "axios";
//Back
import axios from "axios";
import { useEffect } from "react";

function AccionesAdmin2() {


    // const [flagSU,setFlagSU] = useState('False')
    // const [flagCard,setFlagCard] = useState('False')
    // const [flagBlog,setFlagBlog] = useState('False')
    const [option,setOption] = useState('')
    const [flagAgregar, setFlagAgregar] = useState('')

    const agregarSU = () => {
        setFlagAgregar('True')
        setOption('SU')
    }
   
    const agregarCard = () => {
        setFlagAgregar('True')
        setOption('card')

    }
    const agregarBlog = () => {
        setFlagAgregar('True')
        setOption('blog')
    }
    const agregarEncuesta = () => {
        setFlagAgregar('True')
        setOption('encuestas')
    }


    const cancelar2 = () =>{
        setFlagAgregar('False')
    }

    return (
        <div className="div-accion-main2">
            {/* <h2>{accion}</h2> */}
            <div className="div-btn-acciones2">
                <button className="btn-acciones-editar" onClick={agregarSU}>Crear Super User</button>
                <button className="btn-acciones-editar" onClick={agregarCard}>Crear Nota</button>
                <button className="btn-acciones-editar" onClick={agregarBlog}>Crear Blog</button>
                <button className="btn-acciones-editar" onClick={agregarEncuesta}>Crear Encuesta</button>
                {flagAgregar == 'True' && <CreateInfo cancelar2={cancelar2} tablaAux={option} />}
            </div>
        </div>
    )
}

export default AccionesAdmin2