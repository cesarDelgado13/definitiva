import React, { useEffect, useState } from "react";

//Componentes
import BtnPrimary from "../components/btn_primary";
import BtnAdmin from "../components/btn_admin";
import Card from "../components/Card";
import Blog from "../components/Blog";
import Titles from "../components/Titles";
// import SlideImages from "../components/Carousel";
import Carousel from "../components/Carousel";
import AccionesAdmin from "../components/AccionesAdmin";

//Navegacion
import { useNavigate } from "react-router-dom";

//BACK
import Axios from "axios";
//Back
import axios from "axios";

//Estilo
import '../stylesheet/views/Home.css'

//Cookies
import Cookies from 'universal-cookie';
//Imagen
import login_img from '../img/login.jpeg'
import img_1 from '../img/img_1.jpeg'
import img_2 from '../img/img_2.jpeg'
import img_3 from '../img/img_3.jpeg'
import img_4 from '../img/img_4.jpeg'
import img_5 from '../img/img_5.jpeg'
import img_6 from '../img/img_6.jpeg'


function Home() {
    //Navegacion
    const navigate = useNavigate();



    //Arreglo con los datos del back
    const [infoBlog, setInfoBlog] = useState([])
    const [infoCard, setInfoCard] = useState([])
    const [aux, setAux] = useState(0)
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [isAdmin, setIsAdmin] = useState('')
    const [acciones, setAcciones] = useState('False')
    const [crear, setCrear] = useState('False')
    const [titulosBlog, setTitulosBlog] = useState([])
    const [titulosTarjetas, setTitulosTarjetas] = useState([])
    const [tabla, setTabla] = useState('')
    const [titulosAux, setTitulosAux] = useState([])



    //Llamada al back
    // const card = () => {
    //     Axios.get(`http://localhost:8891/api/getCard`).then((response)=>{
    //         setInfoCard(response.data)
    //     })
    // }

    //Use Effect para cargar informacion del back
    useEffect(() => {
        document.title = 'Tu salud informa'
        card2()
        card()
        setId(cookies.get('id'))
        idFunction()
        TitulosBlogFunct()
        TitulosTarjetasFunct()



    }, [id])

    const card = async () => {

        try {
            let respData = await Axios.get(`http://localhost:8891/api/getCard`);
            setInfoBlog(respData.data)

        } catch (error) {
            console.log(error)

        }

    }

    const card2 = async () => {

        try {
            let respData = await Axios.get(`http://localhost:8891/api/getCard2`);
            setInfoCard(respData.data)

        } catch (error) {
            console.log(error)

        }

    }

    const cookies = new Cookies();
    /*Funcion para determinar si el usuario es Admin o no*/
    const idFunction = async () => {
        // Axios.get(`http://localhost:8891/api/login`).then((response)=>{
        //     setUser(response.data)
        // })
        try {
            const resp = await Axios.post(`http://localhost:8891/api/userid`, { id: id })
            if (resp.data.ok) {
                setIsAdmin(resp.data.isAdmin);
                setNombre(resp.data.name);
            }
        }
        catch (e) {
            //console.log("ERROR: ", e);
        }
    }

    /*Funcion para traer los titulos del blog la base de datos*/
    const TitulosBlogFunct = async () => {

        try {
            const respData = await Axios.get(`http://localhost:8891/updateHeadersBlog`);
            if (respData.data.ok) {
                console.log('BLOG --->', respData.data.titles)
                setTitulosBlog(respData.data.titles)
            }

        } catch (error) {
            console.log(error)

        }

    }

    /*Funcion para traer los titulos de las tarjetas de la base de datos*/
    const TitulosTarjetasFunct = async () => {

        try {
            const respData = await Axios.get(`http://localhost:8891/updateHeadersCard`);
            if (respData.data.ok) {
                console.log('CARD --->', respData.data.titles)
                setTitulosTarjetas(respData.data.titles)
            }

        } catch (error) {
            console.log(error)

        }

    }

    //Funcion de navegacion
    const login = () => {
        navigate("/")
    }

    const adelante = () => {

        if (aux < infoCard.length - 1) {
            setAux(aux + 1)
        }
        else {
            setAux(infoCard.length - 1)
        }
        return aux

    }
    const atras = () => {
        if (aux > 0) {
            setAux(aux - 1)
        }
        else {
            setAux(0)
        }
        return aux
    }

    const CrearSU = () => {
    
    }
    const Crear = () => {
        setCrear('True')
        console.log('ENTRE A CREAR ESTO ES CREAR ---->',crear)
    }


    const Editar = () => {
        setTabla('blog')
        setAcciones('True')

    }
    const Cancelar = () => {

        setAcciones('False')
        navigate('/Home')
    }
    const Eliminar = () => {
        setTabla('card')
        setAcciones('True')

    }

    useEffect(() => {
        if (tabla == 'blog') {
            setTitulosAux(titulosBlog)
            console.log('ESTO ES AUX TITUTLOS EN BLOG', titulosAux)
        }
        if (tabla == 'card') {
            setTitulosAux(titulosTarjetas)
            console.log('ESTO ES AUX TITUTLOS EN CARD', titulosAux)
        }


    }, [tabla])


    if (infoBlog.length === 0) {
        console.log("No hay datos")
        setTimeout(() => console.log("Hola"), 5)
    } else {
        return (
            <div className='home'>
                <div className={acciones == 'True' ? 'contenedor-acciones' : 'contenedor-acciones2'}>
                    <div className="contenedor-aux-acciones-2">
                        <h2>{tabla.toUpperCase()}</h2>
                        <button onClick={Crear}>Crear</button>
                        {
                            acciones == 'True' &&
                            (titulosAux.map((e) =>
                                <AccionesAdmin crear={"True"} titulo={e.titulo} id={e.id} tabla={tabla} />
                            ))
                        }
                        <button className="btn-cerrar" onClick={Cancelar}>Cerrar</button>
                    </div>
                </div>
                <div className="header-home">
                    <div className="Bienvenido"><h2>Bienvenido</h2> <h3>{nombre}</h3></div>
                    {isAdmin == 'true' && (
                        <BtnAdmin funcion={[Editar, Eliminar, CrearSU]} />
                    )
                    }
                    <BtnPrimary funcion={login} name={"Cerrar Sesion"} />
                </div>
                <div className="main-home">
                    {/* <Carousel/> */}
                    <Carousel url_imagen_1={login_img}
                        url_imagen_2={img_1}
                        url_imagen_3={img_2}
                        url_imagen_4={img_3}
                        url_imagen_5={img_4}
                        url_imagen_6={img_5}
                        url_imagen_7={img_6} />


                    {/* card */}
                    <div className="card">
                        <button className="btn-back" onClick={atras}>B</button>
                        <Card titulo={infoCard[aux]['titulo']}
                            informacion={infoCard[aux]['info']}
                            image={infoCard[aux]['image']}

                        />
                        <button className="btn-next" onClick={adelante}>N</button>
                        <div className="titles-div">
                            {infoCard.map((e) =>
                                <Titles titulo={e.titulo} />
                            )}
                        </div>
                    </div>

                    {/* extra info */}
                    <div className="extra-info">
                        {infoBlog.map((e) =>
                            <>
                                <Blog titulo={e.titulo}
                                    informacion={e.informacion}
                                    image={e.image}
                                    fecha={e.fecha.split('T')[0]}
                                    fuente={e.fuente} />
                                <div className="div-separador"></div>
                            </>)
                        }
                    </div>
                </div>


            </div>
        )
    }


    // return (
    //     // <div className="home">
    //     //     <h2>Bienvenido</h2>
    //     //     <button onClick={adelante}>N</button>
    //     //     <button onClick={atras}>B</button>
    //     //     {/* <Card  titulo={infoCard[aux]['titulo']}
    //     //             informacion={infoCard[aux]['informacion']}
    //     //             image={infoCard[aux]['image']}
    //     //             fecha={infoCard[aux]['fecha'].split('T')[0]}
    //     //             fuente={infoCard[aux]['fuente']}
    //     //         /> */}

    //     //     <BtnPrimary funcion={login} name={"Cerrar Sesion"}/>
    //     // </div>
    // )
}

export default Home