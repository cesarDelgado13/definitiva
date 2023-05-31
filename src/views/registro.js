import React, { useEffect, useState } from 'react';
import Axios from "axios";

//Componentes
import BtnPrimary from '../components/btn_primary';

//Estilos
import "../stylesheet/views/registro.css"

//Imagenes
import login from '../img/login.jpeg'

//Navegacion
import { useNavigate } from 'react-router-dom';


function Registro(){

    //Use effect para nombrar la pagina
    useEffect(() => {
        document.title = 'Registrarse'
    })

    //Navegacion
    const navigate = useNavigate();

    //Use State para inicializar variables
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState("false")

    const submitPost = () => {
        Axios.post('http://localhost:8891/create', {name: name, lastName: lastName, email:email, password:password, isAdmin:isAdmin})
        navigate("/")
    }
    const regresar = () => {
        navigate("/")
    }

    return(
        <div className='main-container-registro'>
            <div className='header'><h1>Registrarse</h1></div>
            
            <div className='form'>

                <form className='form2'>
                    <div>
                        <p>Nombre :</p><input onChange={(e) => setName(e.target.value)} className='input-generico' type="text" name='name' required id='Nombre'/>
                    </div>
                    <div>
                        <p> Apellido :</p><input onChange={(e) => setLastName(e.target.value)} className='input-generico' type="text" name='lastname' required/>
                    </div>
                    <div>
                        <p> Correo electrónico :</p><input onChange={(e) => setEmail(e.target.value)} className='input-generico' placeholder = 'mi_correo@mail.com' type="email" name='Mail' required/>
                    </div>
                    <div>
                        <p> Contraseña :</p><input onChange={(e) => setPassword(e.target.value)} className='input-generico' placeholder = '****' type="password" name='pwd' required/>    
                    </div>
                    <div>
                        <p> Confirmar contraseña :</p><input className='input-generico' placeholder = '****' type="password" name='pwd2' required/>
                    </div>
                    <div className='divButton'>
                        <BtnPrimary funcion={submitPost} ruta={'/'} name={'Registrarse'}/>
                        <h4>ó</h4>
                        <BtnPrimary funcion={regresar} name={'Inicia Sesion'}/>
                    </div> 
                    {/* <button onClick={submitPost}>Prueba</button> */}
                </form>

                <div className='img-registro'>
                    <div className='img_registro2'>
                        <img src={login} alt="" />
                    </div>
                </div>

            </div>
        </div>

    )


}
export default Registro;