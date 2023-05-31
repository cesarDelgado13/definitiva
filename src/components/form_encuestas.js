import React from "react";

function FormEncuestas(){
return (
    <div className="editar-form" action="">
        <h1>Card - {tituloCard}</h1>
        <div className="div-forms">
            <div className="form-editar-2">
                <p>Titulo:</p>
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

export default FormEncuestas;