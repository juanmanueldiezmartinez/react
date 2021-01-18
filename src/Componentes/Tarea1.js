import React, { Fragment } from 'react'


const Tarea1 = (props) => {
    return(
    <Fragment>
    <div className="tarjeta">
        <header className="tarjeta-data-header">
            <h2>{props.nombre}</h2>
            <h4>{props.profesion}</h4>
        </header>
        <img src="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4" alt="Foto de perfil" className="tarjeta-img"/>
        <div className="tarjeta-data">
        </div>
    </div> 
    </Fragment>
    )
}
export default Tarea1