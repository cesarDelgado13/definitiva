import React, { useEffect, useState } from "react";

//Back
import Axios from "axios";

//Navegacion
import { useNavigate } from "react-router-dom";

//Back
import axios from "axios";

// Componentes
import BtnPrimary from "../components/btn_primary";

// Estilos
import "../stylesheet/views/login.css"

//Imagen
import login_img from '../img/login.jpeg'

//Coockie
import Cookies from 'universal-cookie'


function Login() {
    //Use Effect para nombrar la pagina
    useEffect(() => {
        document.title = 'Iniciar Sesion'
    })

    //NAvegacion
    const navigate = useNavigate();

    //Ingresar datos y guardarlos
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [id, setId] = useState('')



    // const ClickIniciar = () => {
    //     console.log("Este es el email: " + email)
    //     console.log("Esta es la contraseña: " + password)
    // }

    //Se ejecuta cada que la pagina se recarga
    useEffect(() => {
        users()
    }, [])

    //Variables que guardan a los usuarios el primer valor es una variable (user), el segundo una funcion (setUser)
    const [user, setUser] = useState([])

    //Variable que contiene los datos extraidos del back
    const users = () => {
        Axios.get(`http://localhost:8891/api/get`).then((response) => {
            setUser(response.data)
        })
    }

    //Funcion de navegacion
    const registrarse = () => {
        navigate("/Registro")
    }

    const login = async () => {
        // Axios.get(`http://localhost:8891/api/login`).then((response)=>{
        //     setUser(response.data)
        // })
        try {
            const resp = await axios.post(`http://localhost:8891/api/login`, { email: email, password: password })
            console.log('RESPUESTA', resp.data.ok)
            console.log('RESPUESTA2', resp.status)
            if (resp.data.ok) {
                setId(resp.data.id);
                navigate("/Home")
                // //Uso de cookie
                const cookies = new Cookies();
                cookies.set('id', resp.data.id, { path: '/' });
                console.log('ID:', resp.data.id)
                // console.log('cookies: ', cookies.get('id'))
            }
            if (!resp.data.ok) {
                alert(resp.data.err.message)
            }


        }
        catch (e) {
            console.log("[mysql error]", e);
        }
    }

    return (
        <div className="login">
            <div className="left-form">

                <div className="login-form" action="">
                    <h1>Iniciar Sesion</h1>
                    <div className="email-login">
                        <p>Correo</p>
                        <input onChange={(e) => setEmail(e.target.value)} className="input-generico2" placeholder="correo@ejemplo.com" type="email" name="email" id="email" />
                    </div>
                    <div className="pass-login">
                        <p>Contraseña</p>
                        <input onChange={(e) => setPassword(e.target.value)} className="input-generico2" placeholder="contraseña" type="password" name="pass" id="pass" />
                    </div>
                    <BtnPrimary funcion={login} name={"Iniciar Sesion"} />
                    <h3>Registrarse</h3>
                    <BtnPrimary funcion={registrarse} name={'Registrarse'} />
                </div>

            </div>
            <div className="rigth-form">
                <img className="img-login" src={login_img} alt="" />
            </div>
        </div>
    )
}

export default Login;

// export const nombre2 = nombre;
// export const isAdmin = isAdmin;

{/*.map es un ciclo for que recorre arreglos*/ }
{/* {user.map((usuario) => (
    <div>
        <h4>{usuario.Nombre}</h4>
        <h4>{usuario.Apellido}</h4>
        <h4>{usuario.Correo}</h4>
        <h4>{usuario.Password}</h4>
    </div>
))} */}