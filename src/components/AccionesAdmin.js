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

function AccionesAdmin({titulo, id, tabla }) {

    const navigate = useNavigate()

    console.log('ESTE ES EL ID EN ACCIONES ADMIN,',id, 'ESTA ES LA TABLA', tabla)
    const [flagEdit, setFlagEdit] = useState('False')
    const [id_aux, setId] = useState('')
    const [tablaAux, setTablaAux] = useState('')
    const [flagEliminar, setFlagEliminar] = useState('False')
    const [create, setCreate] = useState('')
    const [auxCrear, setAuxCrear] = useState('False')

    const editando = () => {
        console.log("Este es mi id:", id)
        setTablaAux(tabla)
        setId(id)
        setFlagEdit('True')
    }
    const cancelar = () => {
        setFlagEdit('False')
    }


    const confirmar = () => {
        setFlagEliminar('False')
        
    }

    const Eliminar = () => {
        setTablaAux(tabla)
        setId(id)
        setFlagEliminar('True')
    }    

    const cancelar2 = () => {
        setAuxCrear("False")

    }
    // const aux_cerrar = () => {
    //     setAuxCrear('False')
    // }
    
    // Activacion del use Effect cada vez que se le de click al boton
    // useEffect(() => {
    //     console.log('---------> ENTRE A UEFF CREAR: ',crear)
    //     setAuxCrear(crear)
    //     setCreate(auxCrear)
    // },[crear])
    

    // useEffect(() => {
    //     if(auxCrear=="True")
    //     //setCreate('True') //Aqui es false
    //         setAuxCrear('False') //Aqui es false
    

    // },[auxCrear])

    return (
        <div className="div-accion-main">
            {/* <h2>{accion}</h2> */}
            <p className="titulo-acciones">{titulo} {/* crear == 'True' && <CreateInfo tabla={tablaAux} cancelar2={cancelar2}/>*/} </p>
            <div className="div-btn-acciones">
                <button className="btn-acciones-editar" onClick={editando}>Editar</button>
                {flagEdit == 'True' && <FormEditar id={id_aux} cancelar={cancelar} func={editando} tabla={tablaAux}/>}
                {flagEliminar == 'True' && <AlertEliminar id={id_aux} titulo={titulo} cancelar={confirmar} func={editando} tabla={tablaAux}/>}

                <button onClick={Eliminar} className="btn-acciones-eliminar">Eliminar</button>
            </div>
            {/* <button onClick={editar}>Cancelar</button> */}
        </div>
    )
}

export default AccionesAdmin