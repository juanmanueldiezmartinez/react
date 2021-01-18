import React, { Fragment } from 'react'


const Comentarios = (props) => {
    return(
        <Fragment>
            <div className="comentarios">
            <div className="div">
                <img className="imagen" src="https://via.placeholder.com/64" alt=""/>
            <div>
                <h5 className="tituloComentario">{props.nombre}</h5>
                {props.comentario}
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Comentarios;