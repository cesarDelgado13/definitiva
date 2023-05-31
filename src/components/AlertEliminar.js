import React, { useEffect } from "react";

// estilo
import '../stylesheet/componentes/AlertEliminar.css'

// Navegacion
import { Navigate, useNavigate } from "react-router-dom";

// Estilos
import '../stylesheet/componentes/AccionesAdmin.css'
import { useState } from "react";

//BACK
import Axios from "axios";

//Back
import axios from "axios";


function AlertEliminar({ id, cancelar, titulo, func, tabla }) {

    const navigate = useNavigate()

    const [id_aux, setId] = useState('')
    const [tablaAux, setTablaAux] = useState('')
    const [flagTable, setflagTable] = useState('')

    const EliminarBlog = async () => {
        try {
            const respData = await Axios.post(`http://localhost:8891/id/deleteFromBlog`, { id: id_aux });
            if (respData.data.ok) {
                console.log('Se ha eleminado el id ', id_aux)
            }


        } catch (error) {
            console.log(error)

        }
    }

    const EliminarCard = async () => {
        try {
            const respData = await Axios.post(`http://localhost:8891/id/deleteFromCard`, { id: id_aux });
            if (respData.data.ok) {
                console.log('Se ha eleminado el id ', id_aux)
            }

        } catch (error) {
            console.log(error)

        }
    }

    const EliminarSurvey = async () => {
        try {
            const respData = await Axios.post(`http://localhost:8891/id/deleteFromSurvey`, { id: id_aux });
            if (respData.data.ok) {
                console.log('Se ha eleminado el id ', id_aux)
            }

        } catch (error) {
            console.log(error)

        }
    }


    const flagTableFunc = () => {
        setflagTable(tabla)
    }

    useEffect(() => {
        setId(id)
        setTablaAux(tabla)
        document.title = 'Tu salud informa'
        console.log("Hice click", tablaAux)
        console.log("Hice click id", id_aux)
        if (flagTable == 'blog') {
            EliminarBlog()
            //Regresar a Inicio
            navigate('/Bridge')
            // navigate('/Home')
            console.log('Despues de nav')
            console.log('Despues de Cancelar')
        }
        if (flagTable == 'card') {
            EliminarCard()
            //Regresar a Inicio
            navigate('/Bridge')
            // navigate('/Home')
            console.log('Despues de nav')
            console.log('Despues de Cancelar')
        }
        if (flagTable == 'encuestas') {
            EliminarSurvey()
            //Regresar a Inicio
            navigate('/Bridge')
            // navigate('/Home')
            console.log('Despues de nav')
            console.log('Despues de Cancelar')
        }
    }, [flagTable])


    return (
        <div className="div-eliminar">
            <div className="alert-eliminar">
                <h2>¿Eliminar {titulo}?</h2>
                <div>
                    <button onClick={flagTableFunc}>Confirmar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default AlertEliminar