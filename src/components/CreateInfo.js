import React, { Component, useEffect, useState } from "react";

import BtnPrimary from "./btn_primary";

//Navegacion
import { useNavigate } from "react-router-dom";

//BACK
import Axios from "axios";
//Back
import axios from "axios";

function CreateInfo({ cancelar2, tablaAux }) {

    const navigate = useNavigate();
    const [tabla, setTabla] = useState('')
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

    //Variables para Surveys
    const [tituloSurvey, setTituloSurvey] = useState('')
    const [descripcionSurvey, setDescripcionSurvey] = useState('')
    const [urlSurvey, setURLSurvey] = useState('')

    //Variables para SU
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [result, setResult] = useState(0)


    useEffect(() => {
        setTabla(tablaAux)
    }, [])


    /*Funcion para enviar el formulario de blog de edicion a la base de datos*/
    const createBlog = async () => {

        try {
            const respData = await Axios.post(`http://localhost:8891/insertBlog`, { titulo: titulo, informacion: informacion, imageURL: imageURL, fecha: fecha, fuente: fuente });
            if (respData.data.ok) {
                console.log('Se han registrado los datos de ', titulo)
            }
            navigate('/Bridge')
        } catch (error) {
            console.log(error)

        }

    }

    const createCard = async () => {

        try {
            const respData = await Axios.post(`http://localhost:8891/insertCard`, { titulo: tituloCard, informacion: infoCard, imageURL: imageURLCard });
            if (respData.data.ok) {
                console.log('Se han registrado los datos de ', titulo)
            }
            navigate('/Bridge')
        } catch (error) {
            console.log(error)

        }

    }

    const createSurvey = async () => {

        try {
            const respData = await Axios.post(`http://localhost:8891/insertNewSurvey`, { title: tituloSurvey, desc: descripcionSurvey, url: urlSurvey });
            if (respData.data.ok) {
                console.log('Se han registrado los datos de ', titulo)
            }
            navigate('/Bridge')
        } catch (error) {
            console.log(error)

        }

    }



    const createSU = async () => {


        try {

            // const respData = await Axios.post(`http://localhost:8891/mail/getUser`, {user:correo});
            //     if (respData.data.ok){
            //         console.log('Se han registrado los datos de ',respData.data.result) 
            //         setResult(1)
            //     }

            if (pass1 == pass2) {
                const respData = await Axios.post(`http://localhost:8891/insertSU`, { name: nombre, lname: apellido, user: correo, pwd: pass1 });
                if (respData.data.ok) {
                    console.log('Se han registrado los datos de ', nombre)
                    navigate('/Bridge')
                }
                else {
                    console.log('SISTEMA DICE: ', respData.data.msg)
                }

            }
            else {
                console.log('Las contraseñas no coinciden.')
            }
        } catch (err) {
            console.log(err)

        }

    }

    if (tabla == 'blog') {

        return (
            <div className="editar-form" action="">
                <h1>Blog - {titulo}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo:</p>
                        <input onChange={(e) => setTitulo(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Información: </p>
                        <textarea onChange={(e) => setInformacion(e.target.value)} className="input-area" rows='20' cols='100' value={informacion} />
                    </div>
                    <div className="form-editar-2">
                        <p>URL: </p>
                        <input onChange={(e) => setImageURL(e.target.value)} className="input-generico2" placeholder="Imagen" type="text" name="pass" id="pass" />
                    </div>
                    <div className="form-editar-2">
                        <p>Fecha: </p>
                        <input onChange={(e) => setFecha(e.target.value)} className="input-generico2" placeholder="Fecha" type="text" name="pass" id="pass" />
                    </div>
                    <div className="form-editar-2">
                        <p>Fuente: </p>
                        <input onChange={(e) => setFuente(e.target.value)} className="input-generico2" placeholder="Fuente" type="text" name="pass" id="pass" />
                    </div>
                </div>
                <BtnPrimary funcion={createBlog} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar2} name={'Cancelar'} />
            </div>
        )
    }

    else if (tabla == 'card') {
        return (
            <div className="editar-form" action="">
                <h1>Card - {tituloCard}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo:</p>
                        <input onChange={(e) => setTituloCard(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Información: </p>
                        <textarea onChange={(e) => setInfoCard(e.target.value)} className="input-area" rows='20' cols='100' />
                    </div>
                    <div className="form-editar-2">
                        <p>URL: </p>
                        <input onChange={(e) => setImageURLCard(e.target.value)} className="input-generico2" placeholder="Imagen" type="text" name="pass" id="pass" />
                    </div>
                </div>

                <BtnPrimary funcion={createCard} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar2} name={'Cancelar'} />
            </div>
        )
    }
    else if (tabla == 'encuestas') {
        return (
            <div className="editar-form" action="">
                <h1>Encuesta - {tituloSurvey}</h1>
                <div className="div-forms">
                    <div className="form-editar-2">
                        <p>Titulo:</p>
                        <input onChange={(e) => setTituloSurvey(e.target.value)} className="input-generico2" placeholder="Titulo" type="text" name="email" id="email" />
                    </div>
                    <div className="inforacion-form-editar">
                        <p>Descripcion: </p>
                        <textarea onChange={(e) => setDescripcionSurvey(e.target.value)} className="input-area" rows='20' cols='100' />
                    </div>
                    <div className="form-editar-2">
                        <p>Link: </p>
                        <input onChange={(e) => setURLSurvey(e.target.value)} className="input-generico2" placeholder="Link de encuesta" type="text" name="pass" id="pass" />
                    </div>
                </div>

                <BtnPrimary funcion={createSurvey} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar2} name={'Cancelar'} />
            </div>
        )
    }

    else {
        return (
            <div className="editar-form" action="">
                <h1>Agregar Super Usuario</h1>
                <div className="div-forms">
                    <div className="form-crear-usuario">
                        <p>Nombre: </p>
                        <input onChange={(e) => setNombre(e.target.value)} className="input-generico2" placeholder="Juan" type="text" name="pass" id="pass" />
                    </div>
                    <div className="form-crear-usuario">
                        <p>Apellido: </p>
                        <input onChange={(e) => setApellido(e.target.value)} className="input-generico2" placeholder="Perez" type="text" name="pass" id="pass" />
                    </div>
                    <div className="form-crear-usuario">
                        <p>Correo:</p>
                        <input onChange={(e) => setCorreo(e.target.value)} className="input-generico2" placeholder="Username" type="email" name="email" id="email" />
                    </div>
                    <div className="form-crear-usuario">
                        <p>Contraseña: </p>
                        <input onChange={(e) => setPass1(e.target.value)} className="input-generico2" placeholder="Password" type="password" name="pass" id="pass" />
                    </div>
                    <div className="form-crear-usuario">
                        <p>Repetir Contraseña: </p>
                        <input onChange={(e) => setPass2(e.target.value)} className="input-generico2" placeholder="Password" type="password" name="pass" id="pass" />
                    </div>
                </div>

                <BtnPrimary funcion={createSU} name={"Guardar"} />
                {/* <h3>Registrarse</h3> */}
                <BtnPrimary funcion={cancelar2} name={'Cancelar'} />
            </div>
        )
    }
}

export default CreateInfo