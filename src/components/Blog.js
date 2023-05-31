import React, { useEffect, useState } from "react";


// Estilos
import "../stylesheet/componentes/Blog.css";

function Blog({ titulo, informacion, image, fecha, fuente }) {
    const [parrafo, setParrafo] = useState(["hola\n", "hola\n", "hola\n"]);
    const [flagParrafo, setFlagParrafo] = useState("");

    const func_parrafo = () => {
        setParrafo(informacion.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;").split("\n"));
        console.log("ESTO ES PARRAFO EN FUNC PARRAFO", parrafo);
    };

    const display_parrafo = (parrafo_aux) => {
        return (
            <p>
                {parrafo_aux}
                <br />
            </p>
        );
    };

    useEffect(() => {
        func_parrafo();
        if (parrafo.length != 0) {
            setFlagParrafo("True");
        }
    }, []);

    console.log("FLAG: ", flagParrafo);
    if (flagParrafo == "True") {
        return (
            // <div className="div-blog2">
            <div className="blog-contain">
                <h1>{titulo}</h1>
                <div>
                    {parrafo.map((string) => {
                        return (
                            <div>
                                <p className={string.indexOf('>') != -1 || string.indexOf('•') != -1 ? 'style-arrow': ''}>{string}</p>
                                {/* // console.log('ESTOY EN MAP',string) */}
                            </div>
                        )
                    })
                    }
                </div>
                <div className="img-card-blog">
                    <img src={image} alt="Imagen" />
                </div>
                <h3>Fuente: {fuente}</h3>
                <h4>Fecha de posteo: {fecha}</h4>
            </div>
            // </div>
        );
    }
}

export default Blog;

// parrafo.map((e) => {
//     display_parrafo(e);
//   })
