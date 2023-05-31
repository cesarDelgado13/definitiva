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

function Bridge () {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/Home')
    }, [])


    return(
        <div>Pase por bridge</div>
    )
}

export default Bridge