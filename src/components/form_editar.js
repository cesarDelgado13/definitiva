import React from "react";
import { useState } from "react";
//BACK
import Axios from "axios";
//Back
import axios from "axios";
import { useEffect } from "react";

// Navegacion
import { Navigate, useNavigate } from "react-router-dom";


//Componentes
import BtnPrimary from "./btn_primary";

//estilos
import '../stylesheet/componentes/form-editar.css'

function FormEditar({ id, cancelar, func, tabla }) {

    console.log('ESTE ES EL ID EN FORM EDITAR,', id)
    const navigate = useNavigate();

    //Variables para Blog
    const [titulo, setTitulo] = useState('')
    const [informacion, setInformacion] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [fuente, setFuente] = useState('')
    const [fecha, setFecha] = useState('')

    //Variables para Card
    const [tituloCard, setTituloCard] = useState('')
    const [infoCard, setInfoCard] = useState('')
    const [imageURLCard, setImageURLCard] = useState('')


    //Variables para Survey
    const [tituloSurvey, setTituloSurvey] = useState('')
    const [descripcionSurvey, setDescripcionSurvey] = useState('')
    const [urlSurvey, setURLSurvey] = useState('')




    //Use Effect para cargar informacion del back


    /*Funcion para rellenar el formulario de edicion*/

    console.log('Este es ID', id)
    const editarBack = async () => {
        try {
            const respData = await Axios.post(`http://localhost:8891/id/getCard`, { id: id });
            console.log('Esto es lo que me da el back', respData)
            if (respData.data.ok) {
                setTitulo(respData.data.titulo)
                setInformacion(respData.data.informacion)
                setImageURL(respData.data.imgURL)
                setFecha(respData.data.fecha)
                setFuente(respData.data.fuente)

            }

        } catch (error) {
            console.log(error)

        }
    }

    const editarBackCard = async () => {
        console.log('Este es ID antes del IF', id)
        {
            console.log('Este es ID EN EL IF', id)
            try {
                const respData = await Axios.post(`http://localhost:8891/id/getCard2`, { id: id });
                console.log('Esto es lo que me da el back', respData)
                if (respData.data.ok) {
                    setTituloCard(respData.data.titulo)
                    setInfoCard(respData.data.informacion)
                    setImageURLCard(respData.data.imgURL)

                }

            } catch (error) {
                console.log(error)

            }
        }
    }

    const editarBackSurvey = async () => {
        console.log('Este es ID antes del IF', id)
        {
            console.log('Este es ID EN EL IF', id)
            try {
                const respData = await Axios.post(`http://localhost:8891/id/getSurvey`, { id: id });
                console.log('Esto es lo que me da el back', respData)
                if (respData.data.ok) {
                    setTituloSurvey(respData.data.titulo)
                    setDescripcionSurvey(respData.data.desc)
                    setURLSurvey(respData.data.link)

                }

            } catch (error) {
                console.log(error)

            }
        }
    }

    /*Funcion para enviar el formulario de blog de edicion a la base de datos*/
    const updateBlog = async () => {
        // alert("Guadrr")
        try {
            const respData = await Axios.post(`http://localhost:8891/updateBlog`, { id: id, titulo: titulo, informacion: informacion, imageURL: imageURL, fecha: fecha, fuente: fuente });
            console.log("Entre al try en blog")
            if (respData.data.ok) {
                console.log('Se han actualizado los datos de ', titulo)
            }
            navigate('/Bridge')
        } catch (error) {
            console.log(error)

        }

    }


    /*Funcion para enviar el formulario de card de edicion a la base de datos*/
    const updateCard = async () => {

        try {
            const respData = await Axios.post(`http://localhost:8891/updateCard`, { id: id, titulo: tituloCard, informacion: infoCard, imageURL: imageURLCard });
            if (respData.data.ok) {
                console.log('Se han actualizado los datos de ', titulo)
            }
            navigate('/Bridge')

        } catch (error) {
            console.log(error)
        }

    }


    /*Funcion para enviar el formulario de card de edicion a la base de datos*/
    const updateSurvey = async () => {

        try {
            const respData = await Axios.post(`http://localhost:8891/id/updateSurvey`, { id: id, title: tituloSurvey, desc: descripcionSurvey, url: urlSurvey });
            if (respData.data.ok) {
                console.log('Se han actualizado los datos de ', titulo)
            }
            navigate('/Bridge')

        } catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        document.title = 'Tu salud informa'
        if (tabla == 'blog') {
            editarBack()
        }
        if (tabla == 'card') {

            editarBackCard()
        }
        if (tabla == 'encuestas') {

            editarBackSurvey()
        }
        
    }, [id])



    if (tabla == 'blog') {

        return (
            <div className="editar-form" action="">
                <h1>Blog - {titulo}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo: </p>
                        <input onChange={(e) => setTitulo(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" value={titulo} />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Información: </p>
                        <textarea onChange={(e) => setInformacion(e.target.value)} className="input-area" rows='20' cols='100' value={informacion} />
                    </div>
                    <div className="form-editar-2">
                        <p>URL: </p>
                        <input onChange={(e) => setImageURL(e.target.value)} className="input-generico2" placeholder="Imagen" type="text" name="pass" id="pass" value={imageURL} />
                    </div>
                    <div className="form-editar-2">
                        <p>Fecha: </p>
                        <input onChange={(e) => setFecha(e.target.value)} className="input-generico2" placeholder="Fecha" type="text" name="pass" id="pass" value={fecha} />
                    </div>
                    <div className="form-editar-2">
                        <p>Fuente: </p>
                        <input onChange={(e) => setFuente(e.target.value)} className="input-generico2" placeholder="Fuente" type="text" name="pass" id="pass" value={fuente} />
                    </div>
                </div>
                <BtnPrimary funcion={updateBlog} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar} name={'Cancelar'} />
            </div>
        )
    }

    else if(tabla == 'card') {
        return (
            <div className="editar-form" action="">
                <h1>Card - {tituloCard}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo: </p>
                        <input onChange={(e) => setTituloCard(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" value={tituloCard} />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Información: </p>
                        <textarea onChange={(e) => setInfoCard(e.target.value)} className="input-area" rows='20' cols='100' value={infoCard} />
                    </div>
                    <div className="form-editar-2">
                        <p>URL: </p>
                        <input onChange={(e) => setImageURLCard(e.target.value)} className="input-generico2" placeholder="Imagen" type="text" name="pass" id="pass" value={imageURLCard} />
                    </div>
                </div>

                <BtnPrimary funcion={updateCard} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar} name={'Cancelar'} />
            </div>
        )
    }

    else{
        return (
            <div className="editar-form" action="">
                <h1>Encuesta - {tituloSurvey}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo: </p>
                        <input onChange={(e) => setTituloSurvey(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" value={tituloSurvey} />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Descripcion: </p>
                        <textarea onChange={(e) => setDescripcionSurvey(e.target.value)} className="input-area" rows='20' cols='100' value={descripcionSurvey} />
                    </div>
                    <div className="form-editar-2">
                        <p>URL: </p>
                        <input onChange={(e) => setURLSurvey(e.target.value)} className="input-generico2" placeholder="Imagen" type="text" name="pass" id="pass" value={urlSurvey} />
                    </div>
                </div>

                <BtnPrimary funcion={updateSurvey} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar} name={'Cancelar'} />
            </div>
        )
    }
}

export default FormEditar