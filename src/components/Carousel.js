//Estilos
import { useEffect, useState } from 'react'
import '../stylesheet/componentes/slide_images.css'

function Carousel({ url_imagen_1, url_imagen_2, url_imagen_3, url_imagen_4, url_imagen_5, url_imagen_6, url_imagen_7 }) {


    // aux = 0
    // length_2 = len(array)

    // first = 1
    // second = 2
    // last_one = length_2-1
    // last_one_2 = length_2-2
    const [carousel, setCarousel] = useState([])
    const [aux2, setAux2] = useState(0)
    const [length_2, setLeng_2] = useState(0)
    const [first, setFirst] = useState(1)
    const [second, setSecond] = useState(2)
    const [bandera, setBandera] = useState(true)
    const [aux2Flag, setAuxFlag] = useState(true)


    // setLeng_2(carousel.length)


    useEffect(() => {
        document.title = 'Tu salud informa'
        setCarousel([url_imagen_1, url_imagen_2, url_imagen_3, url_imagen_4, url_imagen_5, url_imagen_6, url_imagen_7])
        setLeng_2(carousel.length)

    }, [url_imagen_1, url_imagen_2, url_imagen_3, url_imagen_4, url_imagen_5, url_imagen_6, url_imagen_7])



    const [last_one, setLastOne] = useState(6)
    const [last_one_2, setLastOne2] = useState(5)




    const adelante2 = () => {
        setLeng_2(carousel.length)
        // console.log('Estoy Adelante en SetLeng()',length_2)
        setAux2(aux2 + 1)
        console.log('Estoy Adelante en SetAux(1)', aux2)

        setBandera(true)

    }


    const atras2 = () => {
        setLeng_2(carousel.length)

        setBandera(false)
        setAux2(aux2 - 1)

    }


    useEffect(() => {
        console.log("Entre al use effect")
        if (bandera) {
            if (aux2 === length_2 || aux2 === 0) {
                // console.log("If",aux2)
                setAux2(0)
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(length_2 - 1)
                setLastOne2(length_2 - 2)
            }

            else if (aux2 === 1) {
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(aux2 - 1)
                setLastOne2(length_2 - 1)
            }



            else if (aux2 === length_2 - 1) {
                setFirst(0)
                setSecond(1)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)
            }


            else if (aux2 === length_2 - 2) {
                setFirst(length_2 - 1)
                setSecond(0)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)
            }

            else {
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)
            }
        }
        else {
            if (aux2 === 0) {
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(length_2 - 1)
                setLastOne2(length_2 - 2)
            }

            else if (aux2 === -1) {
                console.log("Aux: ", aux2)
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(length_2 + aux2 - 1)
                setLastOne2(length_2 + aux2 - 2)
                setAuxFlag(true)

            }

            else if (aux2 === -2) {
                setFirst(aux2 + 2)
                setSecond(aux2 + 3)
                setLastOne(length_2 + aux2 - 2)
                setLastOne2(length_2 + aux2 - 3)
            }


            else if (aux2 === 1) {
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(aux2 - 1)
                setLastOne2(length_2 - 1)
            }

            else if (aux2 === length_2 - 1) {
                setFirst(0)
                setSecond(1)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)

            }

            else if (aux2 === length_2 - 2) {
                setFirst(length_2 - 1)
                setSecond(0)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)

            }

            else {
                setFirst(aux2 + 1)
                setSecond(aux2 + 2)
                setLastOne(aux2 - 1)
                setLastOne2(aux2 - 2)
            }

            // codigo marco

        }
        // codigo marco
        if (aux2 === length_2 - 1 && aux2Flag) {
            setAux2(0)
        }

        else if (aux2 < 0) {
            setAux2(length_2 - 1)
            console.log('Estoy en elseIF ATRAS')
            setAuxFlag(false)

        }

        // console.log("Aux: ", aux2)
        // console.log("First: ", first)
        // console.log("Second: ", second)
        // console.log("LastOne: ", last_one)
        // console.log("L2: ", last_one_2)





    }, [aux2, bandera, aux2Flag])

    // console.log("Last one ",last_one,"-",last_one_2)

    console.log('Carousel Length', carousel.length)
    console.log("Aux: ", aux2)
    console.log("First: ", first)
    console.log("Second: ", second)
    console.log("LastOne: ", last_one)
    console.log("L2: ", last_one_2)


    return (
        <div className="slide_images">
            {/* <button className="btn-back-car" onClick={atras2}>B</button> */}
            <button onClick={atras2} className="btn-back-car">
                <div className="btn-atras-car-1"></div>
                <div className="btn-atras-car-2"></div>
            </button>

            <div className="div_img_slide_1">
                {/* <img className="slide_url_img" src={carousel[last_one]} alt="imagen 1" /> */}
                <img className="slide_url_img" src={last_one == -1 ? carousel[5] : carousel[last_one]} alt="imagen 1" />
            </div>
            <div className="div_img_slide_2">
                <img className="slide_url_img" src={last_one_2 == -2 ? carousel[6] : carousel[last_one_2]} alt="imagen 2" />
            </div>
            <div className="div_img_slide_3">
                <img className="slide_url_img" src={carousel[aux2]} alt="imagen 3" />
            </div>
            <div className="div_img_slide_2">
                <img className="slide_url_img" src={carousel[first]} alt="imagen 4" />
            </div>
            <div className="div_img_slide_1">
                <img className="slide_url_img" src={carousel[second]} alt="imagen 5" />
            </div>

            <button onClick={adelante2} className="btn-delante-car">
                <div className="btn-delante-car-1"></div>
                <div className="btn-delante-car-2"></div>
            </button>
            {/* <button className="btn-delante-car" onClick={adelante2}>A</button> */}
        </div>
    )
}
export default Carousel